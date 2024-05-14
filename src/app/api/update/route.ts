// import { supabaseClient } from "@/db/supabaseClient";

// export async function post(req: any, res: any) {
//   if (req.method === "POST") {
//     if (typeof supabaseClient !== "undefined") {
//       const { dates, timestamp } = req.body;
//       const { data, error } = await supabaseClient
//         .from("may")
//         .update({ timestamp })
//         .match({ dates });

//       if (error) {
//         return res.status(500).json({ error: error.message });
//       }
//       return res.status(200).json({ data });
//     } else {
//       res.setHeader("Allow", ["POST"]);
//       res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
//   } else {
//     console.error("DB initialization has failed, check call route POST");
//   }
// }

import { supabaseClient } from "@/db/supabaseClient";

// Correctly export a named function for the POST method
export async function POST(req: any, res: any) {
  if (req.method === "POST") {
    if (typeof supabaseClient !== "undefined") {
      const { dates, timestamp } = req.body;
      const { data, error } = await supabaseClient
        .from("may")
        .update({ timestamp })
        .match({ dates });

      if (error) {
        return res.status(500).json({ error: error.message });
      }
      return res.status(200).json({ data });
    } else {
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } else {
    console.error("DB initialization has failed, check call route POST");
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
