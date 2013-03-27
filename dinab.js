 $.widget( "custom.catcomplete", $.ui.autocomplete, {
    _renderMenu: function( ul, items ) {
      var that = this,
        currentCategory = "";
      $.each( items, function( index, item ) {
        if ( item.category != currentCategory ) {
          ul.append( "<li class='ui-autocomplete-category'>" + item.category + "</li>" );
          currentCategory = item.category;
        }
        that._renderItemData( ul, item );
      });
    }
  });

//#search2 for popdown, #search for condition
//search2 dropdown is behind pop up.
   $(function() {
    var data = [
      { label: "atrial fibrillation", category: "" },
      { label: "Atrial Fibrillation", category: "Existing Conditions" },
      { label: "Diabetes, Type 1", category: "Existing Conditions" },
      { label: "Knee Surgery", category: "Existing Conditions" },
    ];
 
  	var data2 = [
      { label: "Warfarin", category: "" },
      { label: "Warfarin", category: "Related Drugs" },
      { label: "Antromentin", category: "Related Drugs" },
      { label: "Phenindione", category: "Related Drugs" },
    ];
 
    $( "#search" ).catcomplete({
      delay: 0,
      source: data
    });

    $( "#search2" ).catcomplete({
      delay: 0,
      source: data2
    });

    $("#search2").position({within:"#dialog"})


  });


 $(function() {
    var tabTitle = $( "#search2" ),
      tabContent = $( "#tab_content" ),
      tabTemplate = "<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>",
      tabCounter = 2;
 
    var tabs = $( "#tabs" ).tabs();
 
    // modal dialog init: custom buttons and a "close" callback reseting the form inside
    var dialog = $( "#dialog" ).dialog({
      autoOpen: false,
      buttons: {
        Calculate: function() {
          addTab();
          $( this ).dialog( "close" );
        },
        Cancel: function() {
          $( this ).dialog( "close" );
        }
      },
      close: function() {
        form[ 0 ].reset();
      }
    });
 
    // addTab form: calls addTab function on submit and closes the dialog
    var form = dialog.find( "form" ).submit(function( event ) {
      addTab();
      dialog.dialog( "close" );
      event.preventDefault();
    });
 
    // actual addTab function: adds new tab using the input from the form above
    function addTab() {
      var label = tabTitle.val() || "Tab " + tabCounter,
        id = "tabs-" + tabCounter,
        li = $( tabTemplate.replace( /#\{href\}/g, "#" + id ).replace( /#\{label\}/g, label ) ),
        tabContentHtml = tabContent.val() || "Tab " + tabCounter + " content.";
 
      tabs.find( ".ui-tabs-nav" ).append( li );
      tabs.append( "<div id='" + id + "'><p>" + tabContentHtml + "</p></div>" );
      tabs.tabs({active: true});
      tabs.tabs( "refresh" );
      tabCounter++;
    }
 
    // addTab button: just opens the dialog
    $( "#add_tab" )
      .button()
      .click(function() {
        dialog.dialog( "open" );
      });
 
    // close icon: removing the tab on click
    tabs.delegate( "span.ui-icon-close", "click", function() {
      var panelId = $( this ).closest( "li" ).remove().attr( "aria-controls" );
      $( "#" + panelId ).remove();
      tabs.tabs( "refresh" );
    });
 
    tabs.bind( "keyup", function( event ) {
      if ( event.altKey && event.keyCode === $.ui.keyCode.BACKSPACE ) {
        var panelId = tabs.find( ".ui-tabs-active" ).remove().attr( "aria-controls" );
        $( "#" + panelId ).remove();
        tabs.tabs( "refresh" );
      }
    });
  });

function inputFocus(i){
    if(i.value==i.defaultValue){ i.value=""; i.style.color="#000"; }
}
function inputBlur(i){
    if(i.value==""){ i.value=i.defaultValue; i.style.color="#888"; }
}

// learn more about factor
function openLearnMore(id) {
	var s = "";
	s += "<h1>SNP: CYP2Y9</h1>";
	
	// loop through the data related to the SNP and append to learn more info box
	s += "<table>";
	s += "<tr><th>Level of Evidence</th><td>1A</td></tr>";
	s += "<tr><th>OMB Race</th><td>White</td></tr>";
	s += "<tr><th>Mutant</th><td>CT</td></tr>";
	s += "<tr><th>Function</th><td>Missense (Val -> Met)</td></tr>";
	s += "<tr><th>URL to dbSNP's page</th><td><a href='http://www.ncbi.nlm.nih.gov/projects/SNP/snp_ref.cgi?rs=2108622'>http://www.ncbi.nlm.nih.gov/projects/SNP/snp_ref.cgi?rs=2108622</a></td></tr>";
	s += "</table>";
	
	s += $( "#snp-data-desc" ).html();
	
	s += "<h3>Publications</h3>";
	s += $( "#publication-desc" ).html();
	// loop through the array of publications and append to learn more info box
	s += "PubmedID: <a href='http://www.ncbi.nlm.nih.gov/pubmed?term=18305455'>http://www.ncbi.nlm.nih.gov/pubmed?term=18305455</a>";
	s += "<table>";
	s += "<tr><th>Frequency</th><td>0.4</td></tr>";
	s += "<tr><th>P-value</th><td>0.05</td></tr>";
	s += "<tr><th>Dose</th><td>Lower dosage</td></tr>";
	s += "<tr><th>Population Size</th><td>1,000 participants</td></tr>";
	s += "<tr><th>Population</th><td>White/Caucasian</td></tr>";
	s += "</table>";
	
	$( "#factor" + id ).html(s);
}