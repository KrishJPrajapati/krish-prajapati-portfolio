import ServiceCard from "./ServiceCard";

export default function ServiceSection(){
      const cards = [
    {
      icon: '/skills/webicon.png',
      title: 'Web Design & Development',
      description:
        'Crafting responsive, user-friendly websites with clean UI and robust backend logic. I specialize in building full-stack applications using modern frameworks like React, Node.js, and MongoDB — tailored for performance and scalability.',
    },
    {
      icon: '/skills/aiicon.png',
      title: 'Applying AI in Projects',
      description:
        'Integrating machine learning concepts into real-world use cases to add intelligence to applications. Currently exploring practical applications of AI in web platforms to enhance decision-making, automation, and user experience.',
    },
    {
      icon: '/skills/secicon.png',
      title: 'Security Analysis',
      description:
        'Passionate about identifying and mitigating web vulnerabilities. Equipped with foundational skills in penetration testing and tools like Nmap, Burp Suite, and Wireshark to help improve the security posture of web-based systems.'    
    },
  ];
    return(
        <div className="bg-black flex text-white gap-9 py-25 px-10 justify-evenly">
         {cards.map((card,index)=>(
                <ServiceCard key={index} icon={card.icon} title={card.title} text={card.description} />
         ))}  
        </div>
    )
}