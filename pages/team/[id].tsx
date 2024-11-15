import React from "react";
import { useRouter } from "next/router";
import teamData from "@/datas/aboutData.json";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

const TeamMemberPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the selected team member
  const member = teamData.team.find(
    (member) => member.name.replace(" ", "").toLowerCase() === id
  );
  const otherMembers = teamData.team.filter((m) => m !== member);

  if (!member) return <p>Loading...</p>;
  const memberSkills = member.skills || [];

  return (
    <>
      <Header />
      <div className="bg-gray-900 text-white min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center py-10 px-5">
        {/* Hero Section */}
        <div className="w-full max-w-4xl flex flex-col lg:flex-row items-center justify-center rounded-lg shadow-xl p-8 lg:p-12 bg-[#2d2d2d] hover:bg-[#333333] transition-all duration-300">
          <div className="w-full lg:w-1/3 flex justify-center mb-6 lg:mb-0">
            <Image
              alt={`${member.name}`}
              src={member.image}
              width={300}
              height={300}
              className="rounded-full w-[250px] h-[300px] object-cover shadow-lg"
            />
          </div>
          <div className="w-full lg:w-2/3 flex flex-col gap-5 lg:pl-10 text-center lg:text-left">
            <h1 className="text-4xl font-bold text-[#FF603D]">{member.name}</h1>
            <h2 className="text-2xl font-medium">{member.position}</h2>
            <p className="text-lg">
              {member.description ||
                "Brief details about this team member will be here."}
            </p>
          </div>
        </div>

        {/* Social Media Links Section */}
        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-[#FF603D] mb-4">
            Connect with {member.name}
          </h3>
          <div className="flex gap-4 justify-center">
            {member.socialLinks?.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF603D] transition-colors"
              >
                <i className={`fab fa-${social.platform} text-2xl`}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-full max-w-4xl mt-12 flex flex-col items-center justify-center mx-auto">
          <h3 className="text-2xl font-semibold mb-6 text-center text-[#FF603D]">
            Skills & Expertise
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {memberSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-[#333333] p-5 rounded-lg shadow-lg text-white flex flex-col items-center"
              >
                <h4 className="text-xl font-semibold mb-3">{skill.name}</h4>
                <p className="text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Worked On Section */}
        <div className="w-full max-w-4xl mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-center text-[#FF603D]">
            Projects Worked On
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {member.projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#333333] p-6 rounded-lg shadow-lg text-white"
              >
                <h4 className="text-xl font-semibold">{project.name}</h4>
                <p className="text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Other Team Members Section */}
        <div className="w-full max-w-4xl mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-center text-[#FF603D]">
            Meet Other Team Members
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {otherMembers.map((otherMember, index) => (
              <Link
                key={index}
                href={`/team/${otherMember.name
                  .replace(" ", "")
                  .toLowerCase()}`}
              >
                <div className="bg-[#333333] p-5 rounded-lg shadow-lg text-white flex flex-col items-center">
                  <Image
                    alt={otherMember.name}
                    src={otherMember.image}
                    width={150}
                    height={150}
                    className="rounded-full w-[150px] h-[150px] object-cover mb-4"
                  />
                  <h4 className="text-xl font-semibold mb-2">
                    {otherMember.name}
                  </h4>
                  <p className="text-sm">{otherMember.position}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeamMemberPage;
