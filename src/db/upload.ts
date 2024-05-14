import { supabaseClient } from "./supabaseClient";

export async function updater() {
  if (typeof supabaseClient !== "undefined") {
    const today = new Date();

    const { data, error } = await supabaseClient
      .from("may")
      .select("id")
      .eq("dates", today.toISOString().split("T")[0])
      .single();

    if (error) throw error;

    const { id } = data;
    const { error: updateError } = await supabaseClient
      .from("may")
      .update({ timestamp: new Date() })
      .match({ id });

    if (updateError) throw updateError;

    const { error: trueFalseError } = await supabaseClient
      .from("may")
      .update({ signed_in: true })
      .match({ id });

    if (trueFalseError) throw trueFalseError;
  }
}
