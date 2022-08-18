export async function loadPokemons(limit:number) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
  const data = await res.json();
  return data;
}