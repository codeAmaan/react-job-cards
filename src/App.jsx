import React from "react";
import Card from "./Component/Card";

const App = () => {
 const jobOpenings = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png",
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$48/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/3840px-Microsoft_logo.svg.png",
    companyName: "Microsoft",
    datePosted: "5 days ago",
    post: "React Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Hyderabad, India",
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "UI Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Cupertino, USA",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg/330px-Meta_Platforms_Inc._logo_%28cropped%29.svg.png",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "Frontend Software Engineer",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$68/hr",
    location: "Menlo Park, USA",
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Web Developer",
    tag1: "Contract",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Chennai, India",
  },
  {
    brandLogo: "https://images.icon-icons.com/2699/PNG/512/netflix_logo_icon_170919.png",
    companyName: "Netflix",
    datePosted: "2 weeks ago",
    post: "Frontend Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Los Gatos, USA",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8BVDgL5y5JdbF0jdvJQ1HJU7mRNJHrY1YaA&s",
    companyName: "Adobe",
    datePosted: "6 days ago",
    post: "React.js Developer",
    tag1: "Hybrid",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Noida, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgq8yBSoWyphg2fzmUvf-VxVRvGDKSOOxfMA&s",
    companyName: "IBM",
    datePosted: "4 weeks ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Entry Level",
    pay: "$40/hr",
    location: "Pune, India",
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgm6zVP8wohoQ0R9IwMY9mNoDuPjejJKrbtg&s",
    companyName: "Intel",
    datePosted: "8 weeks ago",
    post: "Frontend Engineer",
    tag1: "Internship",
    tag2: "Entry Level",
    pay: "$28/hr",
    location: "Bengaluru, India",
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/sco/thumb/2/21/Nvidia_logo.svg/3840px-Nvidia_logo.svg.png",
    companyName: "NVIDIA",
    datePosted: "12 days ago",
    post: "Full Stack Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$75/hr",
    location: "Santa Clara, USA",
  },
];

  return (
    <div className="parent">
      
      {
        jobOpenings.map((job,idx) =>{
          return(
            <div key={idx}>
              <Card
            company={job.companyName}
            companyLogo={job.brandLogo}
            postt={job.post}
            datePost={job.datePosted}
            tagOne={job.tag1}
            tagTwo={job.tag2}
            salary={job.pay}
            locat={job.location} 
          />
            </div>
          )
        })
}
    </div>
  );
};

export default App;
