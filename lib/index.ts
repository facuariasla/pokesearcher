export async function loadPokemons() {
  // Trae 600 pokemons
  // Solo trae la URL de cada uno, y su name
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=200");
  const data = await res.json();
  return data;
}
// Pixel IMAGE
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png

// Big IMAGE svg
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg