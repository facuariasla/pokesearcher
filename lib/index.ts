export async function loadPokemons() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=800");
  const data = await res.json();
  return data;
}