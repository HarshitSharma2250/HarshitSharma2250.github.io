import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import './GithubStatus.css'

export const GithubStatus = () => {
  const [count, setCount] = useState(0);

  const gitinfo = [
    <div className="Monthly-stats">
      <h3 className="month"> Monthly Stats</h3><br />
      <GitHubCalendar
        username="HarshitSharma2250"
      />
    </div>,
    <img
      className="github-images"
      src="https://github-readme-stats.vercel.app/api/top-langs?username=HarshitSharma2250&theme=transparent&hide_border=true&show_icons=true&locale=en&layout=compact&title_color=white&text_color=white"
    />,
    <img
      className="github-images"
      src="https://github-readme-stats.vercel.app/api?username=HarshitSharma2250&theme=transparent&hide_border=true&show_icons=true&locale=en&title_color=white&text_color=white"
    />,
    <img
      className="github-images"
      src="https://github-readme-streak-stats.herokuapp.com/?user=HarshitSharma2250&theme=transparent&hide_border=true&title_color=white&text_color=white&sideNums=white&sideLabels=white&ring=white&fire=white&currStreakLabel=white&currStreakNum=white"
      alt=""
    />
  ];

  useEffect(() => {
 setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % gitinfo.length);
    }, 5000);
  }, []);

  return (
    <div id="Github">
      <h1>Github Stats -(HarshitSharma2250)</h1><br />
      {gitinfo.map((ele, index) => (
        <div key={index} >
           {index === count && ele}
        </div>
      ))}
    </div>
  );
};
