import express from "express";
import OpenAI from "openai";

const app = express();
const port = process.env.PORT || 3000;

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.use(express.json({ limit: "1mb" }));
app.use(express.static("public"));

function cleanPhoto(value) {
  return typeof value === "string" ? value.trim() : "";
}

function extractOutputText(response) {
  if (typeof response.output_text === "string" && response.output_text.trim()) {
    return response.output_text.trim();
  }

  const parts = [];
  for (const item of response.output || []) {
    if (item.type !== "message") continue;
    for (const content of item.content || []) {
      if (content.type === "output_text" && content.text) {
        parts.push(content.text);
      }
    }
  }
  return parts.join("\n").trim();
}

app.post("/api/equipment-weight-lookup", async (req, res) => {
  try {
    const equipmentName = String(req.body?.equipmentName || "").trim();

    if (!equipmentName) {
      return res.status(400).json({ error: "Please enter equipment name." });
    }

    const response = await client.responses.create({
      model: "gpt-5",
      tools: [{ type: "web_search" }],
      input: [
        {
          role: "system",
          content: [
            {
              type: "input_text",
              text:
                "You are helping a theatre rigging calculator estimate weights for production equipment. " +
                "Search the web when useful. Return exactly one best-match result. " +
                "Focus on stage lighting, projectors, speakers, and common live events equipment. " +
                "Estimate single-unit installed weight in kilograms. " +
                "If the exact item is unclear, choose the most likely specific product and give the best practical estimate. " +
                "Return JSON only with keys item, weightKg, and photo. photo can be an empty string if unavailable."
            }
          ]
        },
        {
          role: "user",
          content: [
            {
              type: "input_text",
              text: `Equipment name: ${equipmentName}`
            }
          ]
        }
      ]
    });

    const text = extractOutputText(response);
    let parsed;

    try {
      parsed = JSON.parse(text);
    } catch (err) {
      return res.status(502).json({ error: "Lookup returned unreadable data." });
    }

    const item = typeof parsed.item === "string" ? parsed.item.trim() : "";
    const weightKg = Number(parsed.weightKg);
    const photo = cleanPhoto(parsed.photo);

    if (!item || !Number.isFinite(weightKg) || weightKg <= 0) {
      return res.status(502).json({ error: "Lookup returned incomplete data." });
    }

    return res.json({
      item,
      weightKg: Number(weightKg.toFixed(2)),
      photo
    });
  } catch (err) {
    const message = err && err.message ? err.message : "Lookup failed.";
    return res.status(500).json({ error: message });
  }
});

app.listen(port, () => {
  console.log(`OWL lookup server listening on port ${port}`);
});
