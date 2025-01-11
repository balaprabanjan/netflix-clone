import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hwubvhjsqokgsqhustoz.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3dWJ2aGpzcW9rZ3NxaHVzdG96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYyNTg4MDcsImV4cCI6MjA1MTgzNDgwN30.pN118uibCSgnHQn7EJxCiLOuHELjjmIiLs4ezw0irbc";

export const supabase = createClient(supabaseUrl, supabaseKey);
