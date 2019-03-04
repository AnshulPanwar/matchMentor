export const NAV_OPTIONS = [{
  groupName: "Home",
  children: [
    {
      name: "Landing",
      link: ["/home", "landing"]
    },
    {
      name: "View Matches",
      link: ["/home", "match" ],
      fragment: "matched"
    },
    {
      name: "Approved Matches",
      link: ["/home", "match" ],
      fragment: "approved"
    },
    {
      name: "Assign Mentors",
      link: ["/home", "profile"],
      fragment: "mentor"
    },
    {
      name: "Assign Mentee",
      link: ["/home", "profile"],
      fragment: "mentee"
      
    },
  ]
}];

