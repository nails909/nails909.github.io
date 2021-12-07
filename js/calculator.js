
  function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function wacky_round(number, places) {
      var multiplier = Math.pow(10, places+2); // get two extra digits
      var fixed = Math.floor(number*multiplier); // convert to integer
      fixed += 44; // round down on anything less than x.xxx56
      fixed = Math.floor(fixed/100); // chop off last 2 digits
      return fixed/Math.pow(10, places);
  }

  function update_numbers() {
//  	var salary = parseInt($('#salary').val().replace(',', ''));
        var salary = parseInt($('#salary').val().replace(/,/g, ''));
  	if (isNaN(salary)) { alert('Please enter the number'); return; }

  	/* -- current year calculations -- */
    var net_income = salary;
  	$('#income_annually_2021').html("$" + numberWithCommas(salary.toFixed(2)));
  	$('#income_weekly_2021').html("$" + numberWithCommas((salary / 52).toFixed(2)));
  	$('#income_fornightly_2021').html("$" + numberWithCommas((salary / 26).toFixed(2)));
  	$('#income_monthly_2021').html("$" + numberWithCommas((salary / 12).toFixed(2)));


    if ($('#param_super').attr('checked')) {
      var annuation = salary / (1 + 10.00/100) * 10.00/100;
      net_income = net_income - annuation.toFixed(2);
      $('#income_annually_2021').html("$" + numberWithCommas(net_income.toFixed(2)));
      $('#income_weekly_2021').html("$" + numberWithCommas((net_income / 52).toFixed(2)));
      $('#income_fornightly_2021').html("$" + numberWithCommas((net_income / 26).toFixed(2)));
      $('#income_monthly_2021').html("$" + numberWithCommas((net_income / 12).toFixed(2)));
    } else {
      var annuation = salary * 10.00 / 100;
    }
    $('#super_annually_2021').html("$" + numberWithCommas(annuation.toFixed(2)));
    $('#super_weekly_2021').html("$" + numberWithCommas((annuation / 52).toFixed(2)));
    $('#super_fornightly_2021').html("$" + numberWithCommas((annuation / 26).toFixed(2)));
    $('#super_monthly_2021').html("$" + numberWithCommas((annuation / 12).toFixed(2)));      

    var taxable_income = net_income;

    var tax = 0;
    if ($('#param_resident').attr('checked')) { tax = 0.325 * net_income;  if (net_income >= 1 && (net_income <= 120000 || 120000 == 0)) { tax = 0 + 32.50/100 * (net_income - 0); }  if (net_income >= 120001 && (net_income <= 180000 || 180000 == 0)) { tax = 39000 + 37.00/100 * (net_income - 120000); }  if (net_income >= 180001 && (net_income <= 0 || 0 == 0)) { tax = 61200 + 45.00/100 * (net_income - 180000); }  } else {  if (net_income >= 1 && (net_income <= 18200 || 18200 == 0)) { tax = 0 + 0.00/100 * (net_income - 0); }  if (net_income >= 18201 && (net_income <= 45000 || 45000 == 0)) { tax = 0 + 19.00/100 * (net_income - 18200); }  if (net_income >= 45001 && (net_income <= 120000 || 120000 == 0)) { tax = 5092 + 32.50/100 * (net_income - 45000); }  if (net_income >= 120001 && (net_income <= 180000 || 180000 == 0)) { tax = 29467 + 37.00/100 * (net_income - 120000); }  if (net_income >= 180001 && (net_income <= 0 || 0 == 0)) { tax = 51667 + 45.00/100 * (net_income - 180000); }  }
    if (tax > 0) {
      $('#tax_annually_2021').html("$" + numberWithCommas(tax.toFixed(2)));
      $('#tax_weekly_2021').html("$" + numberWithCommas((tax / 52).toFixed(2)));
      $('#tax_fornightly_2021').html("$" + numberWithCommas((tax / 26).toFixed(2)));
      $('#tax_monthly_2021').html("$" + numberWithCommas((tax / 12).toFixed(2)));      
      net_income = net_income - tax.toFixed(2);
    } else {
      $('#tax_annually_2021').html("$0.00");
      $('#tax_weekly_2021').html("$0.00");
      $('#tax_fornightly_2021').html("$0.00");
      $('#tax_monthly_2021').html("$0.00");            
    }

  	if ($('#param_help').attr('checked')) {
  		var income = salary;
  		var help = 0;  if (income >= 0 && (income <= 47014 || 47014 == 0)) { help = 0.00/100 * income; }  if (income >= 47014 && (income <= 54281 || 54281 == 0)) { help = 1.00/100 * income; }  if (income >= 54282 && (income <= 57538 || 57538 == 0)) { help = 2.00/100 * income; }  if (income >= 57539 && (income <= 60991 || 60991 == 0)) { help = 2.50/100 * income; }  if (income >= 60992 && (income <= 64650 || 64650 == 0)) { help = 3.00/100 * income; }  if (income >= 64651 && (income <= 68529 || 68529 == 0)) { help = 3.50/100 * income; }  if (income >= 68530 && (income <= 72641 || 72641 == 0)) { help = 4.00/100 * income; }  if (income >= 72642 && (income <= 77000 || 77000 == 0)) { help = 4.50/100 * income; }  if (income >= 77001 && (income <= 81620 || 81620 == 0)) { help = 5.00/100 * income; }  if (income >= 81621 && (income <= 86518 || 86518 == 0)) { help = 5.50/100 * income; }  if (income >= 86519 && (income <= 91709 || 91709 == 0)) { help = 6.00/100 * income; }  if (income >= 91710 && (income <= 97212 || 97212 == 0)) { help = 6.50/100 * income; }  if (income >= 97213 && (income <= 103044 || 103044 == 0)) { help = 7.00/100 * income; }  if (income >= 103045 && (income <= 109226 || 109226 == 0)) { help = 7.50/100 * income; }  if (income >= 109227 && (income <= 115678 || 115678 == 0)) { help = 8.00/100 * income; }  if (income >= 115679 && (income <= 122728 || 122728 == 0)) { help = 8.50/100 * income; }  if (income >= 122729 && (income <= 130091 || 130091 == 0)) { help = 9.00/100 * income; }  if (income >= 130092 && (income <= 137897 || 137897 == 0)) { help = 9.50/100 * income; }  if (income >= 137898 && (income <= 0 || 0 == 0)) { help = 10.00/100 * income; }  net_income = net_income - help.toFixed(2);
	  	$('#help_annually_2021').html("$" + numberWithCommas(help.toFixed(2)));
	  	$('#help_weekly_2021').html("$" + numberWithCommas((help / 52).toFixed(2)));
	  	$('#help_fornightly_2021').html("$" + numberWithCommas((help / 26).toFixed(2)));
	  	$('#help_monthly_2021').html("$" + numberWithCommas((help / 12).toFixed(2)));
    } else {
	  	$('#help_annually_2021').html("$0.00");
	  	$('#help_weekly_2021').html("$0.00");
	  	$('#help_fornightly_2021').html("$0.00");
	  	$('#help_monthly_2021').html("$0.00");
    }

    if (!$('#param_resident').attr('checked')) {
      var offset_sum = 0;  if (taxable_income <= 66667) {
	      if (tax <= 445) { offset_sum = tax; }
	      else if (taxable_income < 37000) { offset_sum = 445; }
	      else { offset_sum = parseFloat((66667 - taxable_income) * 1.50/100); }
  	  }
      offset_sum = wacky_round(offset_sum, 2).toFixed(2);
      net_income = net_income + parseFloat(offset_sum);
      $('#offset_annually_2021').html("-$" + numberWithCommas(offset_sum));
      $('#offset_weekly_2021').html("-$" + numberWithCommas((offset_sum / 52).toFixed(2)));
      $('#offset_fornightly_2021').html("-$" + numberWithCommas((offset_sum / 26).toFixed(2)));
      $('#offset_monthly_2021').html("-$" + numberWithCommas((offset_sum / 12).toFixed(2)));
    } else {
      $('#offset_annually_2021').html("$0.00");
      $('#offset_weekly_2021').html("$0.00");
      $('#offset_fornightly_2021').html("$0.00");
      $('#offset_monthly_2021').html("$0.00");
    }

    if (!$('#param_resident').attr('checked')) {
      var medical_levy = parseFloat(taxable_income * 2.00/100);  if (taxable_income < 29032) { medical_levy = parseFloat((taxable_income - 23226) * 10.00/100); } if (taxable_income < 23226) { medical_levy = 0; } net_income = net_income - medical_levy;
      $('#medical_annually_2021').html("$" + numberWithCommas(medical_levy.toFixed(2)));
      $('#medical_weekly_2021').html("$" + numberWithCommas((medical_levy / 52).toFixed(2)));
      $('#medical_fornightly_2021').html("$" + numberWithCommas((medical_levy / 26).toFixed(2)));
      $('#medical_monthly_2021').html("$" + numberWithCommas((medical_levy / 12).toFixed(2)));
    } else {
      $('#medical_annually_2021').html("$0.00");
      $('#medical_weekly_2021').html("$0.00");
      $('#medical_fornightly_2021').html("$0.00");
      $('#medical_monthly_2021').html("$0.00");      
    }
    $('#net_annually_2021').html("$" + numberWithCommas(net_income.toFixed(2)));
  	$('#net_weekly_2021').html("$" + numberWithCommas((net_income / 52).toFixed(2)));
  	$('#net_fornightly_2021').html("$" + numberWithCommas((net_income / 26).toFixed(2)));
  	$('#net_monthly_2021').html("$" + numberWithCommas((net_income / 12).toFixed(2)));

    
    /* -- previous year calculations -- */

    var net_income = salary;
  	$('#income_annually_2020').html("$" + numberWithCommas(salary.toFixed(2)));
  	$('#income_weekly_2020').html("$" + numberWithCommas((salary / 52).toFixed(2)));
  	$('#income_fornightly_2020').html("$" + numberWithCommas((salary / 26).toFixed(2)));
  	$('#income_monthly_2020').html("$" + numberWithCommas((salary / 12).toFixed(2)));


    if ($('#param_super').attr('checked')) {
      var annuation = salary / (1 + 9.50/100) * 9.50/100;
      net_income = net_income - annuation.toFixed(2);
      $('#income_annually_2020').html("$" + numberWithCommas(net_income.toFixed(2)));
      $('#income_weekly_2020').html("$" + numberWithCommas((net_income / 52).toFixed(2)));
      $('#income_fornightly_2020').html("$" + numberWithCommas((net_income / 26).toFixed(2)));
      $('#income_monthly_2020').html("$" + numberWithCommas((net_income / 12).toFixed(2)));
    } else {
      var annuation = salary * 9.50 / 100;
    }
    $('#super_annually_2020').html("$" + numberWithCommas(annuation.toFixed(2)));
    $('#super_weekly_2020').html("$" + numberWithCommas((annuation / 52).toFixed(2)));
    $('#super_fornightly_2020').html("$" + numberWithCommas((annuation / 26).toFixed(2)));
    $('#super_monthly_2020').html("$" + numberWithCommas((annuation / 12).toFixed(2)));      

    var taxable_income = net_income;

    var tax = 0;
    if ($('#param_resident').attr('checked')) { tax = 0.325 * net_income;  if (net_income >= 1 && (net_income <= 120000 || 120000 == 0)) { tax = 0 + 32.50/100 * (net_income - 0); }  if (net_income >= 120001 && (net_income <= 180000 || 180000 == 0)) { tax = 39000 + 37.00/100 * (net_income - 120000); }  if (net_income >= 180001 && (net_income <= 0 || 0 == 0)) { tax = 61200 + 45.00/100 * (net_income - 180000); }  } else {  if (net_income >= 1 && (net_income <= 18200 || 18200 == 0)) { tax = 0 + 0.00/100 * (net_income - 0); }  if (net_income >= 18201 && (net_income <= 45000 || 45000 == 0)) { tax = 0 + 19.00/100 * (net_income - 18200); }  if (net_income >= 45001 && (net_income <= 120000 || 120000 == 0)) { tax = 5092 + 32.50/100 * (net_income - 45000); }  if (net_income >= 120001 && (net_income <= 180000 || 180000 == 0)) { tax = 29467 + 37.00/100 * (net_income - 120000); }  if (net_income >= 180001 && (net_income <= 0 || 0 == 0)) { tax = 51667 + 45.00/100 * (net_income - 180000); } }
    if (tax > 0) {
      $('#tax_annually_2020').html("$" + numberWithCommas(tax.toFixed(2)));
      $('#tax_weekly_2020').html("$" + numberWithCommas((tax / 52).toFixed(2)));
      $('#tax_fornightly_2020').html("$" + numberWithCommas((tax / 26).toFixed(2)));
      $('#tax_monthly_2020').html("$" + numberWithCommas((tax / 12).toFixed(2)));      
      net_income = net_income - tax.toFixed(2);
    } else {
      $('#tax_annually_2020').html("$0.00");
      $('#tax_weekly_2020').html("$0.00");
      $('#tax_fornightly_2020').html("$0.00");
      $('#tax_monthly_2020').html("$0.00");            
    }

  	if ($('#param_help').attr('checked')) {
  		var income = salary;
  		var help = 0;  if (income >= 0 && (income <= 46620 || 46620 == 0)) { help = 0.00/100 * income; }  if (income >= 46620 && (income <= 53826 || 53826 == 0)) { help = 1.00/100 * income; }  if (income >= 53827 && (income <= 57055 || 57055 == 0)) { help = 2.00/100 * income; }  if (income >= 57056 && (income <= 60479 || 60479 == 0)) { help = 2.50/100 * income; }  if (income >= 60480 && (income <= 64108 || 64108 == 0)) { help = 3.00/100 * income; }  if (income >= 64109 && (income <= 67954 || 67954 == 0)) { help = 3.50/100 * income; }  if (income >= 67955 && (income <= 72031 || 72031 == 0)) { help = 4.00/100 * income; }  if (income >= 72032 && (income <= 76354 || 76354 == 0)) { help = 4.50/100 * income; }  if (income >= 76355 && (income <= 80935 || 80935 == 0)) { help = 5.00/100 * income; }  if (income >= 80936 && (income <= 85792 || 85792 == 0)) { help = 5.50/100 * income; }  if (income >= 85793 && (income <= 90939 || 90939 == 0)) { help = 6.00/100 * income; }  if (income >= 90940 && (income <= 96396 || 96396 == 0)) { help = 6.50/100 * income; }  if (income >= 96397 && (income <= 102179 || 102179 == 0)) { help = 7.00/100 * income; }  if (income >= 102180 && (income <= 108309 || 108309 == 0)) { help = 7.50/100 * income; }  if (income >= 108310 && (income <= 114707 || 114707 == 0)) { help = 8.00/100 * income; }  if (income >= 114708 && (income <= 121698 || 121698 == 0)) { help = 8.50/100 * income; }  if (income >= 121699 && (income <= 128999 || 128999 == 0)) { help = 9.00/100 * income; }  if (income >= 129000 && (income <= 136739 || 136739 == 0)) { help = 9.50/100 * income; }  if (income >= 136740 && (income <= 0 || 0 == 0)) { help = 10.00/100 * income; }  net_income = net_income - help.toFixed(2);
	  	$('#help_annually_2020').html("$" + numberWithCommas(help.toFixed(2)));
	  	$('#help_weekly_2020').html("$" + numberWithCommas((help / 52).toFixed(2)));
	  	$('#help_fornightly_2020').html("$" + numberWithCommas((help / 26).toFixed(2)));
	  	$('#help_monthly_2020').html("$" + numberWithCommas((help / 12).toFixed(2)));
    } else {
	  	$('#help_annually_2020').html("$0.00");
	  	$('#help_weekly_2020').html("$0.00");
	  	$('#help_fornightly_2020').html("$0.00");
	  	$('#help_monthly_2020').html("$0.00");
    } if (!$('#param_resident').attr('checked')) {
      var offset_sum = 0;
      if (taxable_income <= 66667) {
	      if (tax <= 445) { offset_sum = tax; }
	      else if (taxable_income < 37000) { offset_sum = 445; }
	      else { offset_sum = parseFloat((66667 - taxable_income) * 1.50/100); }
  	  }
      offset_sum = wacky_round(offset_sum, 2).toFixed(2);
      net_income = net_income + parseFloat(offset_sum);
      $('#offset_annually_2020').html("-$" + numberWithCommas(offset_sum));
      $('#offset_weekly_2020').html("-$" + numberWithCommas((offset_sum / 52).toFixed(2)));
      $('#offset_fornightly_2020').html("-$" + numberWithCommas((offset_sum / 26).toFixed(2)));
      $('#offset_monthly_2020').html("-$" + numberWithCommas((offset_sum / 12).toFixed(2)));
    } else {
      $('#offset_annually_2020').html("$0.00");
      $('#offset_weekly_2020').html("$0.00");
      $('#offset_fornightly_2020').html("$0.00");
      $('#offset_monthly_2020').html("$0.00");
    }

    if (!$('#param_resident').attr('checked')) {
      var medical_levy = parseFloat(taxable_income * 2.00/100); if (taxable_income < 28501) { medical_levy = parseFloat((taxable_income - 22801) * 10.00/100); } if (taxable_income < 22801) { medical_levy = 0; } net_income = net_income - medical_levy;
      $('#medical_annually_2020').html("$" + numberWithCommas(medical_levy.toFixed(2)));
      $('#medical_weekly_2020').html("$" + numberWithCommas((medical_levy / 52).toFixed(2)));
      $('#medical_fornightly_2020').html("$" + numberWithCommas((medical_levy / 26).toFixed(2)));
      $('#medical_monthly_2020').html("$" + numberWithCommas((medical_levy / 12).toFixed(2)));
    } else {
      $('#medical_annually_2020').html("$0.00");
      $('#medical_weekly_2020').html("$0.00");
      $('#medical_fornightly_2020').html("$0.00");
      $('#medical_monthly_2020').html("$0.00");      
    }

  	$('#net_annually_2020').html("$" + numberWithCommas(net_income.toFixed(2)));
  	$('#net_weekly_2020').html("$" + numberWithCommas((net_income / 52).toFixed(2)));
  	$('#net_fornightly_2020').html("$" + numberWithCommas((net_income / 26).toFixed(2)));
  	$('#net_monthly_2020').html("$" + numberWithCommas((net_income / 12).toFixed(2)));

    /* -- END OF previous year calculations -- */
/*    $('#text_after_calculations').html("Do you know you can insure up to <strong>$" + numberWithCommas((salary / 12 * 0.75).toFixed(2)) + "</strong> per month if you can't work due to illness or injury? Find out how much income protection would cost you by <a href='http://3minuteinsurancequotes.com.au?utm_source=ato&utm_medium=referral&utm_content=under-calc&utm_campaign=ato' target='_blank'>comparing TOP-10 insurance companies in Australia</a>."); */
  }

  function changeTab(year) {
    $('.year_tabs').css('background-color', '');
    $('.year_tabs a').css('color', '');
	$('.year_tabs').css('position', 'relative');
	$('.year_tabs').css('top', '0px');
    $('.links_years').css('font-weight', 'normal');
    $('.data_table').hide();
    $('#tab_' + year).css('background-color', 'rgba(219,229,231, 1)');
    $('#tab_' + year + ' a').css('color', '#444444');
	$('#tab_' + year).css('position', 'relative');
	$('#tab_' + year).css('top', '1px');
    $('#link_' + year).css('font-weight', 'bold');
    $('#table_' + year).show();
  }

  function format(input)
  {
    var nStr = input.value + '';
    nStr = nStr.replace( /\,/g, "");
    var x = nStr.split( '.' );
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while ( rgx.test(x1) ) {
        x1 = x1.replace( rgx, '$1' + ',' + '$2' );
    }
    input.value = x1 + x2;
  }
