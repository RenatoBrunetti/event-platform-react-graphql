import { DefaultUi, Player, Youtube } from '@vime/react';

interface VideoPlayerProps {
  videoId: string;
}

export function VideoPlayer({ videoId }: VideoPlayerProps) {
  return (
    <Player>
      <Youtube videoId={videoId} />
      <DefaultUi />
    </Player>
  );
}
