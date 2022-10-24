// Client facing scripts here
$(() => {
  const map_id = $('#identifier').attr('value');
  $.ajax({
    method: 'GET',
    url: `/api/maps/${map_id}/locations`
  })
  .done((response) => {
    const $locationsList = $('#locations');
    $locationsList.empty();

    for (const location of response.locations) {
      $(`<li><a href="/maps/${map_id}/locations/${location.id}" class="location">${location.title}</a>`).appendTo($locationsList);
    }
  });
});
