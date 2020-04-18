(function($) {
  'use strict';
  $(function() {
    $('#order-listing').DataTable({
      buttons : [ {
                text: 'Import',
                  action: function ( e, dt, node, config ) {
                      $("#import").modal('show');
                  }
                },
                {
                extend: 'copy',
                exportOptions: {
                    columns: [ 0, 1, 2, 3, 4, 5]
                  },
                  footer: true
                },
                {
                extend: 'csv',
                exportOptions: {
                    columns: [ 0, 1, 2, 3, 4, 5]
                  },
                  footer: true
                },
                {
                extend: 'excel',
                exportOptions: {
                    columns: [ 0, 1, 2, 3, 4, 5]
                  },
                  footer: true
                },
                {
                extend: 'pdf',
                exportOptions: {
                    columns: [ 0, 1, 2, 3, 4, 5]
                  },
                  footer: true
                },
                {
                extend: 'print',
                exportOptions: {
                    columns: [ 0, 1, 2, 3, 4, 5]
                  },
                  footer: true
                }
              ],

      "aLengthMenu": [
        [5, 10, 15, -1],
        [5, 10, 15, "All"]
      ],
      "iDisplayLength": 10,
      "language": {
        search: ""
      },

      "paging": true,
    } );


    $('#order-listing').each(function() {
      var datatable = $(this);
      // SEARCH - Add the placeholder for Search and Turn this into in-line form control
      var search_input = datatable.closest('.dataTables_wrapper').find('div[id$=_filter] input');
      search_input.attr('placeholder', 'Search');
      search_input.removeClass('form-control-sm');
      // LENGTH - Inline-Form control
      var length_sel = datatable.closest('.dataTables_wrapper').find('div[id$=_length] select');
      length_sel.removeClass('form-control-sm');
    });
  });
})(jQuery);