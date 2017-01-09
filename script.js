		<!-- disable option for 0 and 1 if the other select option is 0 or 1 -->							
			function doDisableInput1(){				
					var x = document.getElementById("input1").value;
					
					if(x == "0" || x == "1"){
						document.getElementById("input2").options[7].disabled = true;
						document.getElementById("input2").options[8].disabled = true;
					}
					else{
						document.getElementById("input2").options[7].disabled = false;
						document.getElementById("input2").options[8].disabled = false;
					}								
			}
			
			function doDisableInput2(){				
				var y = document.getElementById("input2").value;
				
				if(y == "0" || y == "1"){
						document.getElementById("input1").options[7].disabled = true;
						document.getElementById("input1").options[8].disabled = true;
				}
				else{
						document.getElementById("input1").options[7].disabled = false;
						document.getElementById("input1").options[8].disabled = false;
				}
				
			}
		<!-- disable option for 0 and 1 if the other select option is 0 or 1 -->
		
			function doClickRules(){
				var resultrules;							
				var op1Text = document.getElementById("operation1").value;
				var input1Text = document.getElementById("input1").value;
				var input2Text = document.getElementById("input2").value;
				
				if(op1Text == "OR"){
					DoOrOperationRules(input1Text, input2Text)
				}
				else if(op1Text == "AND"){
					DoAndOperationRules(input1Text, input2Text)
				}
				
			}
			
			function DoOrOperationRules(input1Text, input2Text){			
				<!-- OR with number -->
				if (input1Text == "1" && (input2Text == "A" || input2Text == "B" || input2Text == "A'"|| input2Text == "B'"|| input2Text == "A''"|| input2Text == "B''") ){
					resultrules = input1Text;
				}
				else if(input1Text == "0" && (input2Text == "A" || input2Text == "B" || input2Text == "A'"|| input2Text == "B'" || input2Text == "AB")){					
					resultrules = input2Text;
				}
				else if (input1Text == "0" && input2Text == "A''" ){
					resultrules = "A";
				}
				else if (input1Text == "0" && input2Text == "B''" ){
					resultrules = "B";
				}	
				else if ( (input1Text == "A" || input1Text == "B" || input1Text == "A'"|| input1Text == "B'"|| input1Text == "A''"|| input1Text == "B''") && input2Text == "1"){
					resultrules = input2Text;
				}
				else if( (input1Text == "A" || input1Text == "B" || input1Text == "A'"|| input1Text == "B'" || input1Text == "AB") && input2Text == "0"){
					resultrules = input1Text;
				}
				else if (input1Text == "A''" && input2Text == "0" ){
					resultrules = "A";
				}
				else if (input1Text == "B''" && input2Text == "0" ){
					resultrules = "B";
				}
				else if ( (input1Text == "1" && input2Text == "AB") || (input1Text == "AB" && input2Text == "1") ){
					resultrules = "1";
				}	
				<!-- OR with number -->
				
				<!-- OR with itself -->
				else if (input1Text == "A''" && input2Text == "A''"){
					resultrules = "A";
				}
				else if (input1Text == "B''" && input2Text == "B''"){
					resultrules = "B";
				}
				else if (input1Text != "A''" && input1Text != "B''" && input1Text == input2Text){
					resultrules = input1Text;
				}				
				<!-- OR with itself -->
				
				<!-- OR with its complement -->
				else if ( (input1Text == "A" && input2Text == "A'") || (input1Text == "A'" && input2Text == "A") ){
					resultrules = "1";
				}
				else if ( (input1Text == "B" && input2Text == "B'") || (input1Text == "B'" && input2Text == "B") ){
					resultrules = "1";
				}
				else if ( (input1Text == "A'" && input2Text == "A''") || (input1Text == "A''" && input2Text == "A'") ){
					resultrules = "1";
				}
				else if ( (input1Text == "B'" && input2Text == "B''") || (input1Text == "B''" && input2Text == "B'") ){
					resultrules = "1";
				}
				<!-- OR with its complement -->				
				
				<!-- OR with its double complement -->
				else if ( (input1Text == "A" && input2Text == "A''") || (input1Text == "A''" && input2Text == "A") ){
					resultrules = "A";
				}
				else if ( (input1Text == "B" && input2Text == "B''") || (input1Text == "B''" && input2Text == "B") ){
					resultrules = "B";
				}
				<!-- OR with its double complement -->
				
				<!--- OR with AB (Rule 10: A + AB = A), except 0 and 1 -->
				else if ( (input1Text == "A" && input2Text == "AB") || (input1Text == "AB" && input2Text == "A") ) {
					resultrules = "A";
				}
				else if ( (input1Text == "B" && input2Text == "AB") || (input1Text == "AB" && input2Text == "B") ) {
					resultrules = "B";
				}
				else if ( (input1Text == "A'" && input2Text == "AB") || (input1Text == "AB" && input2Text == "A'") ) {
					resultrules = "A' + B";
				}
				else if ( (input1Text == "B'" && input2Text == "AB") || (input1Text == "AB" && input2Text == "B'") ) {
					resultrules = "B' + A";
				}
				else if ( (input1Text == "A''" && input2Text == "AB") || (input1Text == "AB" && input2Text == "A''") ) {
					resultrules = "A";
				}
				else if ( (input1Text == "B''" && input2Text == "AB") || (input1Text == "AB" && input2Text == "B''") ) {
					resultrules = "B";
				}
				<!--- OR with AB (Rule 10: A + AB = A) -->
				
				<!-- OR with others -->
				else if ( (input1Text == "A" && input2Text == "B") || (input1Text == "B" && input2Text == "A") ){
					resultrules = "A + B";
				}
				else if ( (input1Text == "A" && input2Text == "B'") || (input1Text == "B'" && input2Text == "A")){
					resultrules = "A + B'";
				}
				else if ( (input1Text == "B" && input2Text == "A'") || (input1Text == "A'" && input2Text == "B")){
					resultrules = "A' + B";
				}
				else if ( (input1Text == "A'" && input2Text == "B'") || (input1Text == "B'" && input2Text == "A'")){
					resultrules = "A' + B'";
				}
				else if ( (input1Text == "A" && input2Text == "B''") || (input1Text == "B''" && input2Text == "A") ){
					resultrules = "A + B";
				}
				else if ( (input1Text == "B" && input2Text == "A''") || (input1Text == "A''" && input2Text == "B") ){
					resultrules = "A + B";
				}
				else if ( (input1Text == "A'" && input2Text == "B''") || (input1Text == "B''" && input2Text == "A'") ){
					resultrules = "A' + B";
				}
				else if ( (input1Text == "B'" && input2Text == "A''") || (input1Text == "A''" && input2Text == "B'") ){
					resultrules = "A + B'";
				}
				else if ( (input1Text == "A''" && input2Text == "B''") || (input1Text == "B''" && input2Text == "A''") ){
					resultrules = "A + B";
				}
				<!-- OR with others -->
				
				document.getElementById("answerrules").innerHTML = resultrules;
			}
			
			function DoAndOperationRules(input1Text, input2Text){
				<!-- AND with number -->
				if(input1Text == "0" && (input2Text == "A" || input2Text == "B" || input2Text == "A'" || input2Text == "B'" || input2Text == "A''" || input2Text == "B''") ){
					resultrules = input1Text;
				}
				else if (input1Text == "1" && (input2Text == "A" || input2Text == "B" || input2Text == "A'" || input2Text == "B'" || input2Text == "AB") ){
					resultrules = input2Text;
				}
				else if ( (input1Text == "A" || input1Text == "B" || input1Text == "A'" || input1Text == "B'" || input1Text == "A''" || input1Text == "B''") && input2Text == "0"){
					resultrules = input2Text;
				}
				else if ( (input1Text == "A" || input1Text == "B" || input1Text == "A'" || input1Text == "B'" || input1Text == "AB") && input2Text == "1"){
					resultrules = input1Text;
				}
				else if ( (input1Text == "A''" && input2Text == "1") || (input1Text == "1" && input2Text == "A''") ){
					resultrules = "A";
				}
				else if ( (input1Text == "B''" && input2Text == "1") || (input1Text == "1" && input2Text == "B''") ){
					resultrules = "B";
				}
				else if ( (input1Text == "AB" && input2Text == "0") || (input1Text == "0" && input2Text == "AB") ) {
					resultrules = "0";
				}
				<!-- AND with number -->
				
				<!-- AND with itself -->
				else if (input1Text == "A''" && input2Text == "A''"){
					resultrules = "A";
				}
				else if (input1Text == "B''" && input2Text == "B''"){
					resultrules = "B";
				}
				else if (input1Text != "A''" && input1Text != "B''" && input1Text == input2Text){
					resultrules = input1Text;
				}
				<!-- AND with itself -->
				
				<!-- AND with its complement -->
				else if ( (input1Text == "A" && input2Text == "A'") || (input1Text == "A'" && input2Text == "A")){
					resultrules = "0";
				}
				else if ( (input1Text == "B" && input2Text == "B'") || (input1Text == "B'" && input2Text == "B") ){
					resultrules = "0";
				}
				else if ( (input1Text == "A'" && input2Text == "A''") || (input1Text == "A''" && input2Text == "A'") ){
					resultrules = "0";
				}
				else if ( (input1Text == "B'" && input2Text == "B''") || (input1Text == "B''" && input2Text == "B'") ){
					resultrules = "0";
				}
				<!-- AND with its complement -->				
				
				<!-- AND with its double complement -->
				else if ( (input1Text == "A" && input2Text == "A''") || (input1Text == "A''" && input2Text == "A") ){
					resultrules = "A";
				}
				else if ( (input1Text == "B" && input2Text == "B''") || (input1Text == "B''" && input2Text == "B") ){
					resultrules = "B";
				}
				<!-- AND with its double complement -->
				
				<!-- AND with AB -->
				else if ( (input1Text == "A" && input2Text == "AB") || (input1Text == "AB" && input2Text == "A") ) {
					resultrules = "AB"
				}
				else if ( (input1Text == "B" && input2Text == "AB") || (input1Text == "AB" && input2Text == "B") ) {
					resultrules = "AB"
				}
				else if ( (input1Text == "A'" && input2Text == "AB") || (input1Text == "AB" && input2Text == "A'") ) {
					resultrules = "0"
				}
				else if ( (input1Text == "B'" && input2Text == "AB") || (input1Text == "AB" && input2Text == "B'") ) {
					resultrules = "0"
				}
				else if ( (input1Text == "A''" && input2Text == "AB") || (input1Text == "AB" && input2Text == "A''") ) {
					resultrules = "AB"
				}
				else if ( (input1Text == "B''" && input2Text == "AB") || (input1Text == "AB" && input2Text == "B''") ) {
					resultrules = "AB"
				}
				<!-- AND with AB -->
				
				<!-- AND with others -->
				else if ( (input1Text == "A" && input2Text == "B") || (input1Text == "B" && input2Text == "A") ){
					resultrules = "AB";
				}
				else if ( (input1Text == "A" && input2Text == "B'") || (input1Text == "B'" && input2Text == "A") ){
					resultrules = "AB'";
				}
				else if ( (input1Text == "A'" && input2Text == "B") || (input1Text == "B" && input2Text == "A'") ){
					resultrules = "A'B";
				}
				else if ( (input1Text == "A'" && input2Text == "B'") ||(input1Text == "B'" && input2Text == "A'") ){
					resultrules = "A'B'";
				}
				else if ( (input1Text == "A" && input2Text == "B''") || (input1Text == "B''" && input2Text == "A")){
					resultrules = "AB";
				}
				else if ( (input1Text == "A''" && input2Text == "B") || (input1Text == "B" && input2Text == "A''") ){
					resultrules = "AB";
				}
				else if ( (input1Text == "A'" && input2Text == "B''") || (input1Text == "B''" && input2Text == "A'")){
					resultrules = "A'B";
				}
				else if ( (input1Text == "A''" && input2Text == "B'") || (input1Text == "B'" && input2Text == "A''") ){
					resultrules = "AB'";
				}
				else if ( (input1Text == "A''" && input2Text == "B''") || (input1Text == "B''" && input2Text == "A''") ){
					resultrules = "AB";
				}
				<!-- AND with others -->
				
				document.getElementById("answerrules").innerHTML = resultrules;
			}
			
			function doDisableDemorganInput3(){
				var x = document.getElementById("input3").value;
					
					if(x == "B"){
						document.getElementById("input4").options[0].disabled = false;
						document.getElementById("input4").options[2].disabled = true;
						document.getElementById("input4").options[3].disabled = true;
						document.getElementById("input4").options[1].disabled = true;
					} 
					else if(x == "A'"){
						document.getElementById("input4").options[3].disabled = false;
						document.getElementById("input4").options[0].disabled = true;
						document.getElementById("input4").options[1].disabled = true;
						document.getElementById("input4").options[2].disabled = true;
					}
					else if(x == "B'"){
						document.getElementById("input4").options[2].disabled = false;
						document.getElementById("input4").options[0].disabled = true;
						document.getElementById("input4").options[1].disabled = true;
						document.getElementById("input4").options[3].disabled = true;
					}
					else if (x == "A"){
						document.getElementById("input4").options[1].disabled = false;
						document.getElementById("input4").options[0].disabled = true;
						document.getElementById("input4").options[2].disabled = true;
						document.getElementById("input4").options[3].disabled = true;
					}
			}
						
			function doClickDemorgan(){
				var resultdemorgan;				
				
				var op2Text = document.getElementById("operation2").value;
				var op3Text = document.getElementById("operation3").value;
				var input3Text = document.getElementById("input3").value;
				var input4Text = document.getElementById("input4").value;
				
				if(op2Text == "OR"){
					DoOrOperationDemorgan(input3Text, input4Text, op3Text)
				}
				else if(op2Text == "AND"){
					DoAndOperationDemorgan(input3Text, input4Text, op3Text)
				}
				
			}
			
			function DoOrOperationDemorgan(input3Text, input4Text, op3Text){
				if ( (input3Text == "A" && input4Text == "B" && op3Text == "NoComplement") ||  (input3Text == "B" && input4Text == "A" && op3Text == "NoComplement") ) {
					resultdemorgan = "A + B";
				}
				else if ( (input3Text == "A" && input4Text == "B" && op3Text == "ComplementAll") ||  (input3Text == "B" && input4Text == "A" && op3Text == "ComplementAll") ) {
					resultdemorgan = "A'B'";
				}
				else if ( (input3Text == "A'" && input4Text == "B'" && op3Text == "NoComplement") ||  (input3Text == "B'" && input4Text == "A'" && op3Text == "NoComplement") ) {
					resultdemorgan = "(AB)'";
				}
				else if ( (input3Text == "A'" && input4Text == "B'" && op3Text == "ComplementAll") ||  (input3Text == "B'" && input4Text == "A'" && op3Text == "ComplementAll") ) {
					resultdemorgan = "(A' + B')'";
				}
				
				document.getElementById("answerdemorgan").innerHTML = resultdemorgan;			
			}
			
			function DoAndOperationDemorgan(input3Text, input4Text, op3Text){
				if ( (input3Text == "A" && input4Text == "B" && op3Text == "NoComplement") ||  (input3Text == "B" && input4Text == "A" && op3Text == "NoComplement") ) {
					resultdemorgan = "AB";
				}				
				else if ( (input3Text == "A" && input4Text == "B" && op3Text == "ComplementAll") ||  (input3Text == "B" && input4Text == "A" && op3Text == "ComplementAll") ) {
					resultdemorgan = "A' + B'";
				}				
				else if ( (input3Text == "A'" && input4Text == "B'" && op3Text == "NoComplement") ||  (input3Text == "B'" && input4Text == "A'" && op3Text == "NoComplement") ) {
					resultdemorgan = "(A + B)'";
				}
				else if ( (input3Text == "A'" && input4Text == "B'" && op3Text == "ComplementAll") ||  (input3Text == "B'" && input4Text == "A'" && op3Text == "ComplementAll") ) {
					resultdemorgan = "(A'B')'";
				}
				
				document.getElementById("answerdemorgan").innerHTML = resultdemorgan;
			}
			
			function doReset(){
				document.getElementById("answerrules").innerHTML = " ";
				document.getElementById("answerdemorgan").innerHTML = " ";
				document.getElementById("input1").selectedIndex = 0;
				document.getElementById("input2").selectedIndex = 0;
				document.getElementById("input3").selectedIndex = 0;
				document.getElementById("input4").selectedIndex = 1;
				document.getElementById("operation1").selectedIndex = 0;
				document.getElementById("operation2").selectedIndex = 0;
				document.getElementById("operation3").selectedIndex = 0;
				document.getElementById("input1").options[7].disabled = false;
				document.getElementById("input1").options[8].disabled = false;
				document.getElementById("input2").options[7].disabled = false;
				document.getElementById("input2").options[8].disabled = false;
				document.getElementById("input4").options[1].disabled = false;
				document.getElementById("input4").options[0].disabled = true;
				document.getElementById("input4").options[2].disabled = true;
				document.getElementById("input4").options[3].disabled = true;
			}			