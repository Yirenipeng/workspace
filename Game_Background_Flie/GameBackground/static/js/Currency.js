/*layui-JS简单的通用方法 date:2017-11-22~*/

//-----[文本框写入value](元素，value)
function TextBoxWrite(element, value) {
	element.val(value);
}
//-----[END][写入value]

//-----[写入html]
function HtmlWrite(element, value) {
	element.html(value);
}
//-----[END][写入html]

//-----[复选框选中元素](元素，value)PS：value:1,2
function CheckBox(element, text) {
	var arr = text.split(',');
	//console.log(arr.length);
	$('input:checkbox[name=' + element.attr("name") + ']').removeAttr("checked");
	//layui.form.render('checkbox');
	$('input:checkbox[name=' + element.attr("name") + ']').each(function(i) {
		for(j = 0; j < arr.length; j++) {
			if($(this).val() == arr[j]) {
				//console.log($(this).attr("checked"));
				$(this).attr("checked", "checked");
				//console.log($(this).attr("checked"));
				break;
			}
		}
		layui.form.render('checkbox');
	});
}
//-----[END][复选框选中元素]

//------[获取复选框值](传入元素)
function ObtainCheckBox( $name) {
	var $bool = false;
	var $lxid = "";
	$('input:checkbox[name=' + $name + ']:checked').each(function(i) {
		if(0 == i) {
			$lxid = $(this).val();
		} else {
			$lxid += ("," + $(this).val());
		}
	});
	return $lxid;
}
//------[获取复选框值]
//-----[选中下拉框]
function SelectedDrop_DownBox(element, $val) {
	element.children("option[value='" + $val + "']").attr("selected", "true");
	layui.form.render('select');
}
//-----[END][选中下拉框]

//-----[验证下拉框中是否选中值]
function VerificationsChoolIdOrclassId(element, $TS) {
	var $bool = false;
	if(element.val().trim() != "") {
		$bool = element.val().trim() >= 0;
		ShowPrompt(element, $bool, $TS);
	} else {
		ShowPrompt(element, $bool, "不能为空哦！");
	}

	return $bool;
}
//-----[END][验证下拉框中是否选中值]

/*//------[获取复选框值]
function ObtainCheckBox(element,$name){
	var $bool=false;
	var $lxid="";
	 $('input:checkbox[name='+$name+']:checked').each(function(i){
       if(0==i){
        $lxid = $(this).val();
       }else{
        $lxid += (","+$(this).val());
       }
      });
     return $lxid;
}
//------[获取复选框值]*/

//-----[清除特殊字符并提示]
function KeyUP_Cler(element) {
	var $val = RegeMatch(element.val()) ? "" : element.val();
	var $bool = RegeMatch(element.val()) ? false : true;
	if($bool!=true){Laert_Prompt("不能有特殊字符哦~");}
	element.val($val);
	return $val;
}
//-----[END][清除特殊字符并提示]

//-----[过滤特殊字符]
function RegeMatch($name) {
	var pattern = new RegExp("[-` ~!@#$%^&*()+=|{}':;',\\[\\].<>/?~！@#￥%……&*（）—+|{}【】‘；：”“’。，、？]");
	if($name != "" && $name.length > 0) {
		if(pattern.test($name)) {
			return true;
		} else {
			return false;
		}
	}
}
//-----[END][过滤特殊字符]
//-----[验证文本框并提示]	
function VerificationsTextBox(element, $TS) {
	var $bool = false;
	$bool = element.val().trim() != "";
	ShowPrompt(element, $bool, $TS);
	return $bool;
}
//-----[END][验证文本框并提示]
//----[显示/隐藏.提示PS:$bool为false时显示,true：隐藏]
function ShowPrompt(element, $bool, $TShtml) {
	var $PromptName = element.attr("id");
	$("." + element.attr("id") + "Prompt").html($TShtml);
	var $bl = false;
	$bl = $bool ? $bl : true;
	if($bool == false) {
		$("." + $PromptName + "Prompt").show();
	} else {
		$("." + $PromptName + "Prompt").hide();
	}
	Notice(element, $bl);
}
//----[END][显示提示]

//-----[验证复选框是否选中值]
function VerificationsCheckBox(element, $name) {
	var $bool = false;
	var $lxid = "";
	$('input:checkbox[name=' + $name + ']:checked').each(function(i) {
		if(0 == i) {
			$lxid = $(this).val();
		} else {
			$lxid += ("," + $(this).val());
		}
	});
	$bool = $lxid != "" ? true : false;
	//console.log($lxid);
	ShowPrompt(element, $bool, "您的还未选择哦~")
	return $bool;
}
//-----[END][验证复选框是否选中值]	

//-----[警告框颜色]
function Notice(element, $bool) {
	if($bool) {
		element.addClass("Notice");
	} else {
		element.removeClass("Notice");
	};
}
//-----[END][警告框颜色]

//-----[弹出框提示]
function Laert_Prompt($TS) {
	layer.open({
		title: false,
		closeBtn: 0,
		anim: 6,
		content: '<i class="layui-icon" style="font-size: 30px; color: #1E9FFF;">&#xe69c;</i>  ' + $TS + '',
		btnAlign: 'c',
		area: ['50'],
		scrollbar: false
	});
}
//-----[END][弹出框提示]

//-----[验证邮编]
function VerificationsZipCode(element, $TS) {
	console.log(element.val());
	var $bool = false;
	if(element.val().trim() != "") {
		var arg = /[1-9]\d{5}(?!\d)/;
		$bool = arg.test(element.val());
		ShowPrompt(element, $bool, $TS);
	} else {
		ShowPrompt(element, $bool, "不能为空哦！");
	}
	return $bool;
}
//-----[END][验证邮编]

//-----[单选按钮选中]
function RadioBtnSelected(element, $val) {
	$('input:radio[name=' + element.attr("name") + ']').each(function(i) {
		if($(this).val() == $val) {
			$(this).attr("checked", "true");
		}
	})
	layui.form.render('radio');
}
//-----[单选按钮选中]
//----[验证单选按钮是否选择]
function VerificationsRadioBtn(element, $TS) {
	var $bool = false;
	if(element.val().trim() != "") {
		var $lxid = "";
		$('input:radio[name=' + element.attr("name") + ']:checked').each(function(i) {
			if(0 == i) {
				$lxid = $(this).val();
			} else {
				$lxid += ("," + $(this).val());
			}
		});
		$bool = $lxid != "" ? true : false;
		ShowPrompt(element, $bool, $TS);

	} else {
		ShowPrompt(element, $bool, "您还未选中哦！");
	}
	return $bool;
}
//----[验证单选按钮是否选择]
//------[获取单选按钮的值]
function GetRadioBtnVal(element) {
	var $val = ""
	$('input:radio[name=' + element.attr("name") + ']:checked').each(function(i) {
		$val += $(this).val().trim();
	})
	return $val;
}
//------[END][获取单选按钮的值]
//-----[验证手机号]
function VerificationPhon(element) {
	var $bool = false;
	var $TShtml = "";
	if(element.val().trim() != "") {
		var $testph = /^1(3|4|5|7|8)\d{9}$/;
		$bool = $testph.test(element.val());
		$TShtml = "您输入的手机号有误！";
	} else {
		$TShtml = "请输入手机号";
	}
	if($bool!=true){
		FriendlyPrompt($TShtml);
	}
	return $bool;
}
//-----[END][验证手机号]	

//-----[验证文本框内是否有非法字符,给与弹出框提示,$DefaultTS:默认提示(即为空是的提示),$ErrorTs:错误提示(包含有非法字符时的提示)]
function VerificationIllegalAndPrompt(element, $DefaultTS, $ErrorTs) {
	var $bool = false;
	var $bl = true;
	var DefaultTS = $DefaultTS;
	var ErrorTs = $ErrorTs;
	if(element.val() != "") {
		$bool = RegeMatch(element.val()) ? false : true;
		if($bool == false) {
			Laert_Prompt(ErrorTs);
		}
	} else {
		Laert_Prompt(DefaultTS);
	}
	$bl = $bool ? false : $bl;
	Notice(element, $bl);
	return $bool;
}
//-----[END][验证文本框内是否有非法字符,给与弹出框提示]

//-----[验证来两时间差]
function TimeDifference(element1, element2) {
	//console.log(element1.val()+" /"+element2.val());
	var $bool = false;
	$bool = element1.val() > element2.val() ? false : true;
	if($bool == false) {
		Laert_Prompt("开始时间和结束时间有错误哦！");
	}
	return $bool;
}
//-----[END][验证来两时间差]

//-------[验证邮箱并给与提示]
function VerificationEmail(element) {
	var $bool = false;
	var $TShtml = "";
	if(element.val() != "") {
		var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
		$bool = re.test(element.val().trim());
		$TShtml = "邮箱格式有误！";
	} else {
		$TShtml = "请填写邮箱！";
	}
	ShowPrompt(element, $bool, $TShtml);
	return $bool;
}
//-----[END][验证邮箱并给与提示]

//----[验证密码]
function VerificationPwd(element1, element2) {
	var $bool = false;
	var $TShtml = "";
	if(element1.val().trim() != "" && element2.val().trim() != "") {

		if(element1.val().trim().length >= 6 && element2.val().trim().length >= 6) {
			$TShtml = "两次输入的密码不一致!";
			$bool = element1.val() == element2.val() ? true : false;
			if($bool!=true){FriendlyPrompt($TShtml);}
		} else {
			$TShtml = "密码长度需大于六位数~哦！";
			if(element1.val().trim().length < 6) {
				FriendlyPrompt($TShtml);
			}
			if(element2.val().trim().length < 6) {
				FriendlyPrompt($TShtml);
			}
		}

	} else {
		$TShtml = "请填写密码!";
		FriendlyPrompt($TShtml);
	}
	return $bool;
}
//----[END][验证密码]
//-----[验证元素不为空，过滤特殊字符]
function VerificationGuestName(element) {
	var $TShtml = "不能为空哦~！";
	var $bool = false;
	var $bl = true;
	if(element.val() != "") {
		var $val = RegeMatch(element.val()) ? "" : element.val();
		$bool = RegeMatch(element.val()) ? false : true;
		$TShtml = "不能有非法字符！";
	}
	ShowPrompt(element, $bool, $TShtml);
	$bl = $bool ? false : $bl;
	Notice(element, $bl);
	return $bool;
}
//-----[END][验证元素不为空，过滤特殊字符]
//-----[验证身份证]
function VerificationCardNo(element) {
	var $bool = false;
	var $bl = true;
	if(element.val().trim() != "") {
		var $testph = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/; //十八身份证正则表达式 
		$bool = $testph.test(element.val());
		if($bool == false) {
			Laert_Prompt("您的身份证号码好像有点问题~！");
		}
	} else {
		Laert_Prompt("身份证号码是不能为空的哦~！");
	}
	$bl = $bool ? false : $bl;
	Notice(element, $bl);
	return $bool;
}
//-----[END][验证身份证]
//-----[验证用户头像像是否选择]
function VerificationImgUrl(element) {
	var $bool = false;
	$bool = element.val() != "" ? true : false;
	ShowPrompt(element, $bool, "您还未选择头像哦~！");
	return $bool;
}
//-----[END][验证用户头像像是否选择]

//----[生成数字加法验证码](传入写入元素，返回验证码计算结果)
function productionVerificationCode(element) {
	var code = 9999;
	var ranColor = '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6); //随机生成颜色
	// alert(ranColor)
	var ranColor2 = '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
	var num1 = Math.floor(Math.random() * 100);
	var num2 = Math.floor(Math.random() * 100);
	//随机算法
	var tmparith = Math.floor(Math.random() * 3);
	var $html = "";
	switch(tmparith) {
		case 1:
			code = num1 + num2;
			$html = num1 + ' + ' + num2 + ' = ?';
			break;
		case 2:
			if(parseInt(num1) < parseInt(num2)) {
				var tmpnum = num1;
				num1 = num2;
				num2 = tmpnum;
			}
			code = num1 - num2;
			$html = num1 + ' - ' + num2 + ' = ?';
			break;
		default:
			code = num1 * num2;
			$html = num1 + ' × ' + num2 + ' = ?';
			break;
	}
	element.val($html); //写入验证码
	if(element.hasClass("nocode")) {
		element.removeClass("nocode");
		element.addClass("code");
	}
	element.css('background', ranColor);
	element.css('color', ranColor2);
	return code;
}
//----[END][生成数字加法验证码]

//-----[验证文本框不能有特殊字符&&不为空&&长度大于多少]
function VerificationTextBoxAndLeng(element, Len) {
	var $TShtml = "不能为空哦~！";
	var $bool = false;
	var $bl = true;
	//console.log(element.val().length+"/"+Len);
	if(element.val() != "" && element.val().length > Len) {
		var $val = RegeMatch(element.val()) ? "" : element.val();
		$bool = RegeMatch(element.val()) ? false : true;
		$TShtml = "不能有非法字符！";
	} else {
		if(element.val() != "") {
			ShowPrompt(element, $bool, "长度小于" + (Len + 1) + "位数");
		} else {
			ShowPrompt(element, $bool, $TShtml);
		}
	}
	$bl = $bool ? false : $bl;
	Notice(element, $bl);
	return $bool;
}
//-----[END][验证文本框不能有特殊字符&&不为空&&长度大于多少]

//-----[友好提示]
function FriendlyPrompt($TS) {
	layer.msg($TS, {
		time: 2000,
		btn: ['知道了'],
		btnAlign: 'c',
		offset: ['100px']
	})
}
//-----[END][友好提示]

//-----[计算时间差]
function GetDateDiff(startTime, endTime, diffType) {
	//将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式 
	startTime = startTime.replace(/\-/g, "/");
	endTime = endTime.replace(/\-/g, "/");
	//将计算间隔类性字符转换为小写
	diffType = diffType.toLowerCase();
	var sTime = new Date(startTime); //开始时间
	var eTime = new Date(endTime); //结束时间
	//作为除数的数字
	var timeType = 1;
	switch(diffType) {
		case "second":
			timeType = 1000;
			break;
		case "minute":
			timeType = 1000 * 60;
			break;
		case "hour":
			timeType = 1000 * 3600;
			break;
		case "day":
			timeType = 1000 * 3600 * 24;
			break;
		default:
			break;
	}
	return parseInt((eTime.getTime() - sTime.getTime()) / parseInt(timeType));
}
//-----[END][计算时间差]

//-----[传入数组，值判断这个值是否在这个数组中true:在False:不在]
function VerificationValIsArray($arr, $val) {
	var bool = false;
	var $newArr = $arr.split(","); //切割字符串
	for(i = 0; i < $newArr.length; i++) {
		bool = $newArr[i] == $val ? true : false;
		if(bool) {
			break;
		}
	}
	return bool;
}
//-----[END][传入数组，值判断这个值是否在这个数组中]

//-----[传入参照数组，选中值数组判断是否现在数组中]
function VerificationArrIsArrArg($argArr, $arr) {
	var bool = false;
	var $IsBool = false;
	var $newArr = $argArr.split(","); //切割参照数组
	var $val = $arr.split(","); //切割值数组
	var $TrueCount = ""; //记录==true的个数
	var $TRUE = $val.length; //全部在参数数组中返回true
	for(i = 0; i < $newArr.length; i++) {
		for(j = 0; j < $val.length; j++) {
			$IsBool = $newArr[i] == $val[j] ? true : false;
			if($IsBool) {
				$TrueCount++;
			}
		}
		if($TRUE == $TrueCount) {
			bool = true;
			break;
		} //全部匹配返回TRUE
	}
	return bool;
}
//-----[传入参照数组，选中值数组判断是否现在数组中]

//----[验证内容是否是纯数字]
function VerificationValIsNumber($val, $ts) {
	var bool = false;
	if($val == "") {
		Laert_Prompt("不能为空哦！");
	} else {
		var reg = /^[0-9]*$/;
		bool = reg.test($val);
		if(bool == false) {
			Laert_Prompt($ts);
		}
	}

	return bool;
}
//----[验证内容是否是纯数字]

//----[获取当前日期]
function gitData() {
	function p(s) {
		return s < 10 ? '0' + s : s;
	}
	var myDate = new Date();
	//获取当前年
	var year = myDate.getFullYear();
	//获取当前月
	var month = myDate.getMonth() + 1;
	//获取当前日
	var date = myDate.getDate();
	return(year + '-' + p(month) + "-" + p(date));
}
//----[获取当前日期End]

//-----[获取当前时间]
function getdatetime() {
	var myDate = new Date();
	//获取当前年
	var year = myDate.getFullYear();
	//获取当前月
	var month = myDate.getMonth() + 1;
	//获取当前日
	var date = myDate.getDate();
	var h = myDate.getHours(); //获取当前小时数(0-23)
	var m = myDate.getMinutes(); //获取当前分钟数(0-59)
	var s = myDate.getSeconds();
	var now = year + '-' + p(month) + "-" + p(date) + " " + p(h) + ':' + p(m) + ":" + p(s);

	return now;
}

function p(s) {
	return s < 10 ? '0' + s : s;
}
//-----[获取当前时间End]

//---[界面刷新]
function SX() {
	window.location.reload(); //刷新当前页面
}

//---[界面刷新End]
//-----[验证文本框弹框提示]
function VerificationTextBombBoxPrompt(element, $TS) {
	var bool = false;
	bool = element.val().trim() != "" ? true : false;
	if(bool == false) {
		FriendlyPrompt($TS)
	}
	return bool;
}
//-----[验证文本框弹框提示End]=======
//---[界面刷新End]

//----[多少毫秒后刷新界面]
function loadSX(s) {
	setTimeout(function() {
		window.location.reload();
	}, s);
}
//----[多少毫秒后刷新界面]
//-----[验证文本框弹框提示]
function VerificationTextBombBoxPrompt(element, $TS) {
	var bool = false;
	bool = element.val().trim() != "" ? true : false;
	if(bool == false) {
		FriendlyPrompt($TS)
	}
	return bool;
}
//-----[验证文本框弹框提示End]

//-----[比较时间大小]
function CompareTimeSize($StartTime, $EndTime) {
	var StartYear = Number($StartTime.split("-")[0]);
	var StartMonth = Number($StartTime.split("-")[1]);
	var EndYear = Number($EndTime.split("-")[0]);
	var EndMonth = Number($EndTime.split("-")[1]);
	var bool = false;
	var yearbool = false;
	bool = StartYear <= EndYear ? true : false;
	yearbool = StartYear < EndYear ? true : false;
	//console.log("StartYear="+StartYear+"、StartMonth="+StartMonth+"、EndYear="+EndYear+"、EndMonth="+EndMonth);
	if(yearbool == false) {
		bool = StartMonth <= EndMonth ? true : false;
	}
	return bool;
}
//-----[比较时间大小End]

//-----[全屏显示]
function Full_screen() {
	if(!document.fullscreenElement && // alternative standard method  
		!document.mozFullScreenElement && !document.webkitFullscreenElement) { // current working methods  
		if(document.documentElement.requestFullscreen) {
			document.documentElement.requestFullscreen();
		} else if(document.documentElement.mozRequestFullScreen) {
			document.documentElement.mozRequestFullScreen();
		} else if(document.documentElement.webkitRequestFullscreen) {
			document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
		}
	} else {
		if(document.cancelFullScreen) {
			document.cancelFullScreen();
		} else if(document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if(document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		}
	}
}
//-----[全屏显示End]

//-- 获取两个日期之间所有日期
Date.prototype.format = function() {
	var s = '';
	var mouth = (this.getMonth() + 1) >= 10 ? (this.getMonth() + 1) : ('0' + (this.getMonth() + 1));
	var day = this.getDate() >= 10 ? this.getDate() : ('0' + this.getDate());
	s += this.getFullYear() + '-'; // 获取年份。
	s += mouth + "-"; // 获取月份。
	s += day; // 获取日。
	return(s); // 返回日期。
};

function getdateAll(begin, end) {
	var $resdata = [];
	var ab = begin.split("-");
	var ae = end.split("-");
	var db = new Date();
	db.setUTCFullYear(ab[0], ab[1] - 1, ab[2]);
	var de = new Date();
	de.setUTCFullYear(ae[0], ae[1] - 1, ae[2]);
	var unixDb = db.getTime();
	var unixDe = de.getTime();
	for(var k = unixDb; k <= unixDe;) {
		$resdata.push(new Date(parseInt(k)).format());
		k = k + 24 * 60 * 60 * 1000;
	}
	return $resdata;
}
//-----获取两个日期之间所有日期[END]
//------[获取两个日期中所有的月份中]
function getMonthBetween(start, end) {
	var result = [];
	var s = start.split("-");
	var e = end.split("-");
	var min = new Date();
	var max = new Date();
	min.setFullYear(s[0], s[1]);
	max.setFullYear(e[0], e[1]);
	var curr = min;
	while(curr <= max) {
		var month = curr.getMonth();
		var str = curr.getFullYear() + "-" + (month);
		var s = curr.getFullYear() + "-0";
		if(str == s) {
			str = curr.getFullYear() + "-12";
		} else {
			str = curr.getFullYear() + "-" + (month < 10 ? '0' + month : month)
		}
		result.push(str);
		curr.setMonth(month + 1);
	}
	return result;
}
//------[获取两个日期中所有的月份中END]

//-----[获取两个日期中的所有年份]
function getYear(start, end) {
	var result = [];
	var starts = start.split('-');
	var ends = end.split('-');
	var staYear = parseInt(starts[0]);
	var endYear = parseInt(ends[0]);
	while(staYear <= endYear) {
		staYear++;
		result.push(staYear+"");
	}
	return result;
}
//-----[获取两个日期中的所有年份END]

//-----[获取前n天的日期]
function getBeforeDate(n) {
	var n = n;
	var d = new Date();
	var year = d.getFullYear();
	var mon = d.getMonth() + 1;
	var day = d.getDate();
	if(day <= n) {
		if(mon > 1) {
			mon = mon - 1;
		} else {
			year = year - 1;
			mon = 12;
		}
	}
	d.setDate(d.getDate() - n);
	year = d.getFullYear();
	mon = d.getMonth() + 1;
	day = d.getDate();
	s = year + "-" + (mon < 10 ? ('0' + mon) : mon) + "-" + (day < 10 ? ('0' + day) : day);
	return s;
}
//-----[获取前n天的日期END]

//-----[判断当前日期在某个时间段之内]
function checkTime(stime, etime, thisDates) {   //开始时间
	  
	var arrs = stime.split("-");  
	var startTime = new Date(arrs[0], arrs[1], arrs[2]);  
	var startTimes = startTime.getTime();   //结束时间
	  
	var arre = etime.split("-");  
	var endTime = new Date(arre[0], arre[1], arre[2]);  
	var endTimes = endTime.getTime();   //当前时间
	  
	var arrn = thisDates.split("-");  
	var nowTime = new Date(arrn[0], arrn[1], arrn[2]);  
	var nowTimes = nowTime.getTime();  
	if(nowTimes < startTimes || nowTimes > endTimes) {    
		return false;  
	}  
	return true;
}
//-----[判断当前日期在某个时间段之内END]

//-----[setDate格式化日期]
function setDate(date) {
	y = date.getFullYear();
	m = date.getMonth() + 1;
	d = date.getDate();
	m = m < 10 ? "0" + m : m;
	d = d < 10 ? "0" + d : d;
	return y + "-" + m + "-" + d;
}
//-----[setDate格式化日期END]

//-----[获取当前月的第一天]
function getCurrentMonthFirst() {
	var date = new Date();
	date.setDate(1);
	return date;
}
//-----[获取当前月的第一天END]

//-----[获取当前月的最后一天]
function getCurrentMonthLast() {
	var date = new Date();
	var currentMonth = date.getMonth();
	var nextMonth = ++currentMonth;
	var nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
	var oneDay = 1000 * 60 * 60 * 24;
	return new Date(nextMonthFirstDay - oneDay);
}
//-----[获取当前月的最后一天END]

//-----[格式化日期AND时间]'Thu May 12 2017 08:00:00 GMT+0800 (中国标准时间)' 
function Formatting_time(time) {
	var date = new Date(time);
	return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}
//-----[格式化日期]'Thu May 12 2017 08:00:00 GMT+0800 (中国标准时间)' 
function Formatting_Date(time) {
	var date = new Date(time);
	return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
}
//-----[格式化日期END]'Thu May 12 2017 08:00:00 GMT+0800 (中国标准时间)'

//-------[Layui刷新父窗体]
function LayuiSXparents(){
	 window.parent.location.reload();
	  var index = parent.layer.getFrameIndex(window.name);
	  parent.layer.close(index);
}
//-------[Layui刷新父窗体]

