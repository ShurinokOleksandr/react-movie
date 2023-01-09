export  const api_key ='8ef3978391d5bf962188c41a2ab0b6d6'

export const requestsMovies = {
    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=1`,
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&page=1`,
    requestRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&page=1`,
    requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=horror&page=1&include_adult=false`,
}
export const requestsTV = {
    requestPopular:`https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&page=1`,
    requestRated:`https://api.themoviedb.org/3/tv/on_the_air?api_key=${api_key}&page=1`,
    requestToday:`https://api.themoviedb.org/3/tv/airing_today?api_key=${api_key}&page=1`,
    requestHorror: `https://api.themoviedb.org/3/search/tv?api_key=${api_key}&language=en-US&query=horror&page=1&include_adult=false`,
}