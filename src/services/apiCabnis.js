import supabase from "./supabase";

export const getCabins = async () => {
  let { data: Cabins, error } = await supabase.from("Cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Could not fetch cabins");
  }
  return Cabins;
};

export const addCabin = async (cabinRow) => {
  const { data, error } = await supabase
    .from("Cabins")
    .insert([cabinRow])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Could not insert the cabin");
  }
  return data;
};

export const deleteCabin = async (id) => {
  const { data, error } = await supabase.from("Cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Could not delete cabin");
  }
  return data;
};
