
(function ($) { // Begin jQuery
    $(function () { // DOM ready
        // If a link has a dropdown, add sub menu toggle.
        $('nav ul li a:not(:only-child)').click(function (e) {
            $(this).siblings('.nav_dropdown').toggle();
            // Close one dropdown when selecting another
            $('.nav_dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        // Clicking away from dropdown will remove the dropdown class
        $('html').click(function () {
            $('.nav_dropdown').hide();
        });
        // Toggle open and close nav styles on click
        $('#nav_toggle').click(function () {
            $('nav ul').slideToggle();                   
        });
        // Hamburger to X toggle
        $('#nav_toggle').on('click', function () {
            this.classList.toggle('active');
        });
    }); // end DOM ready
})(jQuery); // end jQuery






