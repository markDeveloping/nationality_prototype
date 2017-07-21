/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Show and hide toggled content
  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()

  $('.question-two, .question-four').hide();

  $('input[type=radio][name=radio-inline-group-1]').change(function() {
        if (this.value == 'Yes') {
            $('.question-two').show();
        }
        else if (this.value == 'No') {
            $('.question-two').hide();
        }
    });

 $('input[type=radio][name=radio-inline-group-3]').change(function() {
        if (this.value == 'Yes') {
            $('.question-four').hide();
        }
        else if (this.value == 'No') {
            $('.question-four').show();
        }
    });

})

