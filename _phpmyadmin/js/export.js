$(document).ready(function () {
    $("#plugins").change(function () {
        $(".format_specific_options").each(function () {
            $(this).hide()
        });
        var a = $("#plugins option:selected").attr("value");
        $("#" + a + "_options").show()
    })
});
$(document).ready(function () {
    $("input[type='radio'][name$='sql_structure_or_data']").change(function () {
        if ($("input[type='radio'][name$='sql_structure_or_data']:checked").attr("value") == "data") {
            $("#checkbox_sql_dates").parent().fadeTo("fast", 0.4);
            $("#checkbox_sql_dates").attr("disabled", "disabled");
            $("#checkbox_sql_relation").parent().fadeTo("fast", 0.4);
            $("#checkbox_sql_relation").attr("disabled", "disabled");
            $("#checkbox_sql_mime").parent().fadeTo("fast", 0.4);
            $("#checkbox_sql_mime").attr("disabled",
                "disabled")
        } else {
            $("#checkbox_sql_dates").parent().fadeTo("fast", 1);
            $("#checkbox_sql_dates").removeAttr("disabled");
            $("#checkbox_sql_relation").parent().fadeTo("fast", 1);
            $("#checkbox_sql_relation").removeAttr("disabled");
            $("#checkbox_sql_mime").parent().fadeTo("fast", 1);
            $("#checkbox_sql_mime").removeAttr("disabled")
        }
    })
});
function toggle_structure_data_opts(a) {
    var b = "#" + a + "_data", c = "#" + a + "_structure";
    a = $("input[type='radio'][name='" + (a + "_structure_or_data") + "']:checked").attr("value");
    if (a == "data") {
        $(b).slideDown("slow");
        $(c).slideUp("slow")
    } else {
        $(c).slideDown("slow");
        a == "structure" ? $(b).slideUp("slow") : $(b).slideDown("slow")
    }
}
$(document).ready(function () {
    $("input[type='radio'][name='latex_structure_or_data']").change(function () {
        toggle_structure_data_opts("latex")
    });
    $("input[type='radio'][name='odt_structure_or_data']").change(function () {
        toggle_structure_data_opts("odt")
    });
    $("input[type='radio'][name='texytext_structure_or_data']").change(function () {
        toggle_structure_data_opts("texytext")
    });
    $("input[type='radio'][name='htmlword_structure_or_data']").change(function () {
        toggle_structure_data_opts("htmlword")
    });
    $("input[type='radio'][name='sql_structure_or_data']").change(function () {
        toggle_structure_data_opts("sql")
    })
});
function toggle_save_to_file() {
    if ($("#radio_dump_asfile:checked").length == 0) {
        $("#ul_save_asfile > li").fadeTo("fast", 0.4);
        $("#ul_save_asfile > li > input").attr("disabled", "disabled");
        $("#ul_save_asfile > li> select").attr("disabled", "disabled")
    } else {
        $("#ul_save_asfile > li").fadeTo("fast", 1);
        $("#ul_save_asfile > li > input").removeAttr("disabled");
        $("#ul_save_asfile > li> select").removeAttr("disabled")
    }
}
$(document).ready(function () {
    toggle_save_to_file();
    $("input[type='radio'][name='output_format']").change(function () {
        toggle_save_to_file()
    })
});
function toggle_sql_include_comments() {
    $("#checkbox_sql_include_comments").change(function () {
        if ($("#checkbox_sql_include_comments:checked").length == 0) {
            $("#ul_include_comments > li").fadeTo("fast", 0.4);
            $("#ul_include_comments > li > input").attr("disabled", "disabled")
        } else if ($("#radio_sql_structure_or_data_data:checked").length == 1) {
            $("#text_sql_header_comment").parent("li").fadeTo("fast", 1);
            $("#text_sql_header_comment").removeAttr("disabled")
        } else {
            $("#ul_include_comments > li").fadeTo("fast", 1);
            $("#ul_include_comments > li > input").removeAttr("disabled")
        }
    })
}
$(document).ready(function () {
    $("#checkbox_sql_create_table_statements").change(function () {
        if ($("#checkbox_sql_create_table_statements:checked").length == 0) {
            $("#checkbox_sql_if_not_exists").removeAttr("checked");
            $("#checkbox_sql_auto_increment").removeAttr("checked")
        } else {
            $("#checkbox_sql_if_not_exists").attr("checked", "checked");
            $("#checkbox_sql_auto_increment").attr("checked", "checked")
        }
    })
});
$(document).ready(function () {
    $("#plugins").change(function () {
        var a = $("#plugins option:selected").attr("value");
        if ($("#force_file_" + a).attr("value") == "true") {
            $("#radio_view_as_text").attr("disabled", "disabled");
            $("#radio_view_as_text").parent().fadeTo("fast", 0.4)
        } else {
            $("#radio_view_as_text").removeAttr("disabled");
            $("#radio_view_as_text").parent().fadeTo("fast", 1)
        }
    })
});
function toggle_quick_or_custom() {
    if ($("$(this):checked").attr("value") == "custom") {
        $("#databases_and_tables").show();
        $("#rows").show();
        $("#output").show();
        $("#format_specific_opts").show();
        $("#output_quick_export").hide();
        var a = $("#plugins option:selected").attr("value");
        $("#" + a + "_options").show()
    } else {
        $("#databases_and_tables").hide();
        $("#rows").hide();
        $("#output").hide();
        $("#format_specific_opts").hide();
        $("#output_quick_export").show()
    }
}
$(document).ready(function () {
    $("input[type='radio'][name='quick_or_custom']").change(function () {
        toggle_quick_or_custom()
    })
});
$(document).ready(function () {
    $("input[type='hidden'][name='export_method']").attr("value") != "custom-no-form" && $("#quick_or_custom").show();
    $("#scroll_to_options_msg").hide();
    $(".format_specific_options").hide();
    $(".format_specific_options").css({border: 0, margin: 0, padding: 0});
    $(".format_specific_options h3").remove();
    toggle_quick_or_custom();
    toggle_structure_data_opts($("select[id='plugins']").attr("value"));
    toggle_sql_include_comments()
});
$(document).ready(function () {
    $("input[type='radio'][name='allrows']").change(function () {
        if ($("input[type='radio'][name='allrows']:checked").attr("value") == "1") {
            $("label[for='limit_to']").fadeTo("fast", 0.4);
            $("label[for='limit_from']").fadeTo("fast", 0.4);
            $("input[type='text'][name='limit_to']").attr("disabled", "disabled");
            $("input[type='text'][name='limit_from']").attr("disabled", "disabled")
        } else {
            $("label[for='limit_to']").fadeTo("fast", 1);
            $("label[for='limit_from']").fadeTo("fast", 1);
            $("input[type='text'][name='limit_to']").removeAttr("disabled");
            $("input[type='text'][name='limit_from']").removeAttr("disabled")
        }
    })
});
