import CoverLayout from "@/pages/movies/[id]/components/Cover/CoverLayout";
import Image from "next/image";
import Overlay from "@/pages/movies/[id]/components/Cover/Overlay";
import { movieSignal } from "@/signals/movie-signal";

const Cover = () => {
  const coverSrc = movieSignal.value.cover;

  return (
    <CoverLayout>
      <Overlay />
      <Image
        className={"w-full h-full object-cover object-center"}
        loading={"lazy"}
        width={260}
        height={360}
        alt={"cover"}
        src={coverSrc}
      />
    </CoverLayout>
  );
};

export default Cover;
