const { createClient } = require("@supabase/supabase-js");

const supabase = createClient(
  process.env.https://hjyiqeqfgbuuyxntoltk.supabase.co,
  process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqeWlxZXFmZ2J1dXl4bnRvbHRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYwOTA3MDEsImV4cCI6MjA5MTY2NjcwMX0.BURqtAirRtwA6KXb-9aCbgLpGikYKpiJjXhSwUiIScA
);

exports.handler = async (event) => {
  try {
    const { email } = JSON.parse(event.body);

    const { error } = await supabase
      .from("leads")
      .insert([{ email }]);

    if (error) throw error;

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
