import img1 from "../assets/2015_1$largeimg31_Jan_2015_002105273.jpg";
import img2 from "../assets/2018_1$largeimg22_Monday_2018_014703373.jpg";
import img3 from "../assets/potholes-india-roads-death-4.jpg";
import img4 from "../assets/2019_4$largeimg28_Sunday_2019_103349324.jpg";


export const DummyReportsData = [
  {
    id: 1,
    title: "Dustbins are overflowing and municipality officers are sleeping!!",
    category: "Urgent",
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
    location: "Sector 21, Chandigarh",
    date: "13-09-2025",
    likes: 19,
    comments: 9,
    image: img3,
    user: "Karan Mehta",
    description:
      "An uncovered manhole has become a major danger spot in the area. Locals fear accidents, particularly for school children and elderly people."
  }
];


export const DummyCommentsData = [
  {
    reportId: 1,
    comments: [
      { username: "Anya", comment: "Totally agree! Authorities must act soon." },
      { username: "Arfina", comment: "This issue has been ignored for months." }
    ]
  },
  {
    reportId: 2,
    comments: [
      { username: "Gaurav", comment: "Well said! Need accountability." }
    ]
  },
  {
    reportId: 3,
    comments: [
      { username: "Arfina", comment: "These potholes are so dangerous!" },
      { username: "Yash", comment: "Faced an accident here last week." },
      { username: "Anya", comment: "Municipality should be fined for negligence." }
    ]
  },
  {
    reportId: 5,
    comments: [
      { username: "Anya", comment: "Street feels unsafe without lights at night." }
    ]
  }
  
];