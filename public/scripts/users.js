// Client facing scripts here
$(() => {
  $.ajax({
    method: 'GET',
    url: '/api/users'
  })
  .done((response) => {
    const $usersList = $('#users');
    $usersList.empty();
    for(const user of response.users) {
      $(`<li class="user">`).text(user.name).appendTo($usersList);
    }
  });
  //Favourite map loader
  const user_id = $('#favourite-container').attr('value');
  const renderFavourites = (favourites) => {
    const container = $('#favourite-container')
    container.empty();
    for (const favourite of favourites.favourite) {
      const $favourite = `<p>${favourite.title}</p>`
      container.append($favourite);
    }
  }

  const loadFavourites = function () {
    $.ajax({
      method: 'GET',
      url: `/api/favourites/${user_id}`
    })
    .then ((favourites) => {

      renderFavourites(favourites);
    })
  }
  loadFavourites();
});
