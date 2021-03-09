import TimeAgo from "javascript-time-ago";

// Load locale-specific relative date/time formatting rules.
import en from "javascript-time-ago/locale/en";

// Add locale-specific relative date/time formatting rules.
TimeAgo.addLocale(en);

export function formatDate(date, ago = false) {
  if (!date) {
    return "No Date";
  }
  const d = new Date(date);
  const today = new Date().setHours(0, 0, 0, 0);

  // Created Today + Handle Time Zone.
  if (d > today) {
    return "Today";
  } else if (ago) {
    // Create relative date/time formatter.
    const timeAgo = new TimeAgo();
    return timeAgo.format(d);
  } else {
    // print full date.
    return d.toLocaleDateString("en-AU");
  }
}
