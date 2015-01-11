function changePluginOpts() {
    $(".format_specific_options").each(function () {
        $(this).hide()
    });
    var a = $("#plugins option:selected").attr("value");
    $("#" + a + "_options").fadeIn("slow");
    a == "csv" ? $("#import_notification").text("Note: If the file contains multiple tables, they will be combined into one") : $("#import_notification").text("")
}
function matchFile(a) {
    a = a.toLowerCase().split(".");
    var b = a.length;
    if (b != 0) {
        var c = a[b - 1];
        if (c == "gz" || c == "bz2" || c == "zip")b--;
        if ($("select[name='format'] option[value='" + a[b - 1] + "']").length == 1) {
            $("#plugins option:selected").removeAttr("selected");
            $("select[name='format'] option[value='" + a[b - 1] + "']").attr("selected", "selected");
            changePluginOpts()
        }
    }
}
$(document).ready(function () {
    changePluginOpts();
    $("#plugins").change(function () {
        changePluginOpts()
    });
    $("#input_import_file").change(function () {
        matchFile($(this).attr("value"))
    });
    $("#select_local_import_file").change(function () {
        matchFile($(this).attr("value"))
    });
    $("#input_import_file").focus(function () {
        $("#radio_import_file").attr("checked", "checked");
        $("#radio_local_import_file").removeAttr("checked")
    });
    $("#select_local_import_file").focus(function () {
        $("#radio_local_import_file").attr("checked", "checked");
        $("#radio_import_file").removeAttr("checked")
    });
    $("#scroll_to_options_msg").hide();
    $(".format_specific_options").css({border: 0, margin: 0, padding: 0});
    $(".format_specific_options h3").remove()
});
