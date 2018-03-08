function get(name) {
  if (
    (name = new RegExp("[?&]" + encodeURIComponent(name) + "=([^&]*)").exec(
      location.search
    ))
  )
    return decodeURIComponent(name[1]);
}

var ricerca = get("ricerca");
ricerca = ricerca.split("+").join(" ");
var hai_cercato = document.getElementById("hai_cercato");
var input_search = document.getElementById("input_search");

if (hai_cercato && input_search) {
  hai_cercato.innerHTML = `Hai cercato: ${ricerca}`;
  input_search.value = ricerca;
}
if (ricerca) {
  $("#input_search").val(ricerca);
}

function change_pdf(file_name) {
  console.log("alskdjflaksjdfklj");
  $("embed_pdf").remove();
  $("#embed_container").html(
    '<embed id="embed_pdf" src="/content/' +
      file_name +
      '" width="100%" height="100%" alt="pdf">'
  );
}
