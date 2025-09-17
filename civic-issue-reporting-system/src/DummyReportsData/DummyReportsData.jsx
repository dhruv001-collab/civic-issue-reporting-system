import img1 from "../assets/2015_1$largeimg31_Jan_2015_002105273.jpg";
import img2 from "../assets/2018_1$largeimg22_Monday_2018_014703373.jpg";
import img3 from "../assets/potholes-india-roads-death-4.jpg";
import img4 from "../assets/2019_4$largeimg28_Sunday_2019_103349324.jpg";

export const DummyReportsData = [
  {
    id: 1,
    title: "Dustbins are overflowing and municipality officers are sleeping!!",
    category: "Urgent",
    issue: "Sanitation",
    location: "Mansarovar, Jaipur, Rajasthan",
    date: "15-09-2025",
    likes: 21,
    comments: 20,
    image: img1,
    user: "Aditya Verma",
    description:
      "Garbage bins in the area have been overflowing for days, creating a foul smell. Local residents are frustrated as authorities haven’t taken action yet."
  },
  {
    id: 2,
    title: "Yo kaha gyi local government! Ab govt. mein kuch nahi bacha!",
    category: "Normal",
    issue: "Sanitation",
    location: "Banashankari, Bangalore, Karnataka",
    date: "15-09-2025",
    likes: 15,
    comments: 12,
    image: img2,
    user: "Rohit Sharma",
    description:
      "Citizens feel neglected as promises made by the local government remain unfulfilled. Basic civic issues are piling up without proper resolution."
  },
  {
    id: 3,
    title: "Why haven’t these potholes been fixed in the last 5 years?",
    category: "Urgent",
    issue: "Potholes",
    location: "MG Road, Gurugram, Haryana",
    date: "15-09-2025",
    likes: 32,
    comments: 18,
    image: img3,
    user: "Sneha Kumari",
    description:
      "Deep potholes on the main road have been a serious hazard for years. Commuters face daily risks of accidents and vehicle damage."
  },
  {
    id: 4,
    title: "Drainage system blocked due to garbage dumping!",
    category: "Urgent",
    issue: "Sanitation",
    location: "Lalbagh, Lucknow, UP",
    date: "15-09-2025",
    likes: 10,
    comments: 5,
    image: img1,
    user: "Arjun Singh",
    description:
      "Improper disposal of waste has clogged the drainage, leading to waterlogging in nearby streets. Residents worry about health hazards."
  },
  {
    id: 5,
    title: "Street lights not working in the entire lane for 2 weeks.",
    category: "Normal",
    issue: "Broken Street Lights",
    location: "Powai, Mumbai, Maharashtra",
    date: "14-09-2025",
    likes: 7,
    comments: 3,
    image: img4,
    user: "Neha Patel",
    description:
      "For over two weeks, the street lights have been non-functional. The dark lanes have raised safety concerns, especially among women and children."
  },
  {
    id: 6,
    title: "Open manhole poses risk for pedestrians and kids.",
    category: "Urgent",
    issue: "Infrastructure",
    location: "Sector 21, Chandigarh",
    date: "13-09-2025",
    likes: 19,
    comments: 9,
    image: img3,
    user: "Karan Mehta",
    description:
      "An uncovered manhole has become a major danger spot in the area. Locals fear accidents, particularly for school children and elderly people."
  },
  {
    id: 7,
    title: "Traffic signals not working at busy intersection",
    category: "Urgent",
    issue: "Traffic Violations",
    location: "Connaught Place, Delhi",
    date: "12-09-2025",
    likes: 12,
    comments: 6,
    image: img2,
    user: "Rohit Verma",
    description:
      "Malfunctioning traffic lights causing chaos and frequent traffic violations."
  },
  {
    id: 8,
    title: "Potholes near bus stop creating hazards",
    category: "Urgent",
    issue: "Potholes",
    location: "Andheri East, Mumbai, Maharashtra",
    date: "11-09-2025",
    likes: 9,
    comments: 4,
    image: img3,
    user: "Anya Sharma",
    description:
      "Commuters face risks due to potholes near bus stops. Needs urgent repair."
  },
  {
    id: 9,
    title: "Overflowing sewage water in streets",
    category: "Urgent",
    issue: "Sanitation",
    location: "Bandra, Mumbai, Maharashtra",
    date: "10-09-2025",
    likes: 18,
    comments: 10,
    image: img1,
    user: "Rohit Verma",
    description:
      "Sewage water is overflowing, causing unhygienic conditions and mosquito breeding."
  },
  {
    id: 10,
    title: "Streetlights malfunctioning intermittently",
    category: "Normal",
    issue: "Broken Street Lights",
    location: "Whitefield, Bangalore, Karnataka",
    date: "09-09-2025",
    likes: 5,
    comments: 2,
    image: img4,
    user: "Neha Mehta",
    description:
      "Streetlights flicker on and off at night, causing unsafe walking conditions."
  }
];

export const DummyCommentsData = [
  {
    reportId: 1,
    issue: "Sanitation",
    comments: [
      { username: "Anya", comment: "Totally agree! Authorities must act soon." },
      { username: "Arfina", comment: "This issue has been ignored for months." }
    ]
  },
  {
    reportId: 2,
    issue: "Sanitation",
    comments: [
      { username: "Gaurav", comment: "Well said! Need accountability." }
    ]
  },
  {
    reportId: 3,
    issue: "Potholes",
    comments: [
      { username: "Arfina", comment: "These potholes are so dangerous!" },
      { username: "Yash", comment: "Faced an accident here last week." },
      { username: "Anya", comment: "Municipality should be fined for negligence." }
    ]
  },
  {
    reportId: 5,
    issue: "Broken Street Lights",
    comments: [
      { username: "Anya", comment: "Street feels unsafe without lights at night." }
    ]
  },
  {
    reportId: 6,
    issue: "Infrastructure",
    comments: [
      { username: "Karan", comment: "Manhole needs urgent cover!" }
    ]
  },
  {
    reportId: 7,
    issue: "Traffic Violations",
    comments: [
      { username: "Rohit", comment: "Traffic signals must be fixed." }
    ]
  },
  {
    reportId: 8,
    issue: "Potholes",
    comments: [
      { username: "Anya", comment: "Repair this ASAP!" }
    ]
  },
  {
    reportId: 9,
    issue: "Sanitation",
    comments: [
      { username: "Rohit", comment: "Municipality must act before disease spreads." }
    ]
  },
  {
    reportId: 10,
    issue: "Broken Street Lights",
    comments: [
      { username: "Neha", comment: "Street lights are still faulty!" }
    ]
  }
];
