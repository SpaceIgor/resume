// import {
//   SQL,
//   Flask,
//   Python,
//   Django,
//   Mongodb,
//   FastAPI,
//   Selenium,
//   Dynamodb,
//   PostgreSQL,
// } from "@/components/svg";

import { config } from "@/lib/config";

// transition-all duration-500 hover:scale-110

export const AboutMe = () => {
  const text = config.texts.about;

  return (
    <section
      id="about"
      className="container min-h-screen pt-20 flex justify-center items-center"
    >
      <div className="w-full flex flex-col  justify-center gap-4 md:gap-8 md:w-3/5">
        <h2 className="text-neon text-4xl md:text-5xl">About me</h2>
        <p className="font-roboto-mono font-semibold text-primary  md:text-xl">
          {text}
        </p>
        <div className="grid gap-4 grid-cols-5 grid-rows-3">
          {/* <div className="text-white border border-neon rounded-md aspect-square col-span-2 row-span-2"></div> */}
          <img
            alt="python"
            src="/resume/public/icons/python.svg"
            className="col-span-2 row-span-2 transition-all duration-500 hover:scale-110"
          />

          <div className="text-white col-span-3 row-span-1 grid grid-cols-3 grid-rows-1 gap-4 items-center justify-between">
            <img
              alt="sql"
              src="/resume/public/icons/sql.svg"
              className="col-span-1 row-span-1 transition-all duration-500 hover:scale-110"
            />
            <div className="col-span-2 row-span-1 grid grid-cols-4 gap-4">
              <img
                alt="mysql"
                src="/resume/public/icons/mysql.svg"
                className="col-span-1 row-span-1 transition-all duration-500 hover:scale-110"
              />
              <img
                alt="postgressql"
                src="/resume/public/icons/postgressql.svg"
                className="col-span-1 row-span-1 transition-all duration-500 hover:scale-110"
              />
              <img
                alt="mongodb"
                src="/resume/public/icons/mongodb.svg"
                className="col-span-1 row-span-1 transition-all duration-500 hover:scale-110"
              />
              <img
                alt="redis"
                src="/resume/public/icons/redis.svg"
                className="col-span-1 row-span-1 transition-all duration-500 hover:scale-110"
              />
              <img
                alt="sqlite"
                src="/resume/public/icons/sqlite.svg"
                className="col-span-1 row-span-1 transition-all duration-500 hover:scale-110"
              />
              <img
                alt="sqldeveloper"
                src="/resume/public/icons/sqldeveloper.svg"
                className="col-span-1 row-span-1 transition-all duration-500 hover:scale-110"
              />
              <img
                alt="graphql"
                src="/resume/public/icons/graphql.svg"
                className="col-span-1 row-span-1 transition-all duration-500 hover:scale-110"
              />
              <img
                alt="sqlalchemy"
                src="/resume/public/icons/sqlalchemy.svg"
                className="col-span-1 row-span-1 transition-all duration-500 hover:scale-110"
              />
            </div>
          </div>

          <div className="text-white  col-span-3 row-span-2 grid grid-rows-2 grid-cols-3 gap-4">
            <img
              alt="slack"
              src="/resume/public/icons/slack.svg"
              className="col-span-1 row-span-1 transition-all duration-500 hover:scale-110"
            />
            <img
              alt="jira"
              src="/resume/public/icons/jira.svg"
              className="col-span-1 row-span-1 transition-all duration-500 hover:scale-110"
            />
            <img
              alt="kubernetes"
              src="/resume/public/icons/kubernetes.svg"
              className="col-span-1 row-span-1 transition-all duration-500 hover:scale-110"
            />
            <img
              alt="postman"
              src="/resume/public/icons/postman.svg"
              className="col-span-1 row-span-1 transition-all duration-500 hover:scale-110"
            />
            <div className="col-span-1 row-span-1 grid grid-rows-2 grid-cols-2 gap-4">
              <img
                alt="linux"
                src="/resume/public/icons/linux.svg"
                className="col-span-1 row-span-1 transition-all duration-500 hover:scale-110"
              />
              <img
                alt="rabbitmq"
                src="/resume/public/icons/rabbitmq.svg"
                className="col-span-1 row-span-1 transition-all duration-500 hover:scale-110"
              />
              <img
                alt="bash"
                src="/resume/public/icons/bash.svg"
                className="col-span-1 row-span-1 transition-all duration-500 hover:scale-110"
              />
              <img
                alt="gitlab"
                src="/resume/public/icons/gitlab.svg"
                className="col-span-1 row-span-1 transition-all duration-500 hover:scale-110"
              />
            </div>
            <img
              alt="github"
              src="/resume/public/icons/github.svg"
              className="col-span-1 row-span-1 transition-all duration-500 hover:scale-110"
            />
          </div>

          <img
            alt="django"
            src="/resume/public/icons/django.svg"
            className="col-span-1 row-span-1 transition-all duration-500 hover:scale-110"
          />
          <div className="col-span-1 row-span-1 grid grid-cols-2 grid-rows-2 gap-4">
            <img
              alt="flask"
              src="/resume/public/icons/flask.svg"
              className="col-span-1 row-span-1 transition-all duration-500 hover:scale-110"
            />
            <img
              alt="fastapi"
              src="/resume/public/icons/fastapi.svg"
              className="col-span-1 row-span-1 transition-all duration-500 hover:scale-110"
            />
            <img
              alt="selenium"
              src="/resume/public/icons/selenium.svg"
              className="rounded-md col-span-1 row-span-1 transition-all duration-500 hover:scale-110"
            />
            <img
              alt="json"
              src="/resume/public/icons/json.svg"
              className="col-span-1 row-span-1 transition-all duration-500 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
