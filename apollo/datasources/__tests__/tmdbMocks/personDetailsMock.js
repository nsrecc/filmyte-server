/* eslint-disable */
/**
 * People - Get Details
 * GET /person/{person_id} API: https://developers.themoviedb.org/3/people/get-person-details
 *
 * response header 'cache-control': 'public, max-age=21600' --- 6 hours
 * 
 * below example with person_id: 1283 - "Helena Bonham Carter"
 */
export const mockPersonDetailsResponse = {
  adult: false,
  also_known_as: ['Helena Bonham-Carter', '헬레나 본햄 카터', 'Хелена Бонем Картер'],
  biography:
    "Helena Bonham Carter (born 26 May 1966) is an English actress of film, stage, and television. She made her film debut in K. M. Peyton's A Pattern of Roses before winning her first leading role as the titular character in Lady Jane. She is known for her roles in films such as A Room with a View, Fight Club, and the Harry Potter series, as well as for frequently collaborating with director Tim Burton, her domestic partner since 2001. Bonham Carter is a two-time Academy Award nominee for her performances in The Wings of the Dove and The King's Speech; her portrayal of Queen Elizabeth in the latter film garnering her a BAFTA Award in 2011.\n\nDescription above from the Wikipedia article Helena Bonham Carter, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
  birthday: '1966-05-26',
  deathday: null,
  gender: 1,
  homepage: null,
  id: 1283,
  imdb_id: 'nm0000307',
  known_for_department: 'Acting',
  name: 'Helena Bonham Carter',
  place_of_birth: 'Golders Green, London, England, UK',
  popularity: 8.57,
  profile_path: '/mW1NolxQmPE16Zg6zuWyZlFgOwL.jpg',
};


export const mockPersonDetails401Response = {
  status_code: 7,
  status_message: 'Invalid API key: You must be granted a valid key.',
  success: false,
};

// 404 response with person_id: 0
export const mockPersonDetails404Response = {
  success: false,
  status_code: 34,
  status_message: 'The resource you requested could not be found.',
};
