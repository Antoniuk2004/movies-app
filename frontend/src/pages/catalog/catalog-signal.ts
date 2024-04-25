import {signal} from "@preact/signals-react";
import {Movie} from "@/types/Movie";

export const catalogSignal = signal<Movie[] | null>(null);