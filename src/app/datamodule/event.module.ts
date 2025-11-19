type event = {
  id: number;
  title: string;
  img: string;
  dateBegin: string; // could also use Date if you plan to convert it
  dateEnd: string;   // same as above
  category: string;
  sponsors: string[];
};