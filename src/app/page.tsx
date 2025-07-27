'use client'

import DiscordBox from "@/components/discord-box";
import DiscoverServer from "@/components/discover-server";
import Hero from "@/components/hero";
import JoinServer from "@/components/join-server";
import { Particles } from "@/components/magicui/particles";
import { ServerInfo } from "@/types/server";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const {theme} = useTheme();
  const [serverInfo, setServerInfo] = useState<ServerInfo | null>(null);

  useEffect(() => {
    const fetchServerInfo = async () => {
      try {
        const response = await fetch('https://api.mcsrvstat.us/3/jedzhfujzhjebfjbz.mine.fun');
        const data = await response.json();
        setServerInfo(data);
      } catch (error) {
        console.error('Error fetching server info:', error);
      }
    };

    fetchServerInfo();
  }, []);

  return (
    <div>
      <Hero playersOnline={serverInfo?.players?.online} />
      <div className="relative h-auto">
        <Particles className="absolute top-0 left-0 w-full h-full -z-10" color={theme === "dark" ? "#ffffff" : "#000000"} />
        <Particles className="absolute bottom-0 left-0 w-full h-full -z-10" color={theme === "dark" ? "#ffffff" : "#000000"} />
        <div className="py-16 w-full flex justify-center items-center">
          <DiscordBox />
        </div>
        <div id="discover" className="relative pb-16 w-full flex justify-center items-center">
          <DiscoverServer />
        </div>
        <div id="play" className="relative pb-16 w-full flex justify-center items-center">
          <JoinServer players={serverInfo?.players} />
        </div>
      </div>
    </div>
  );
}
