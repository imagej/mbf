




/*
     FILE ARCHIVED ON 7:32:34 Feb 8, 2012 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:28:01 Mar 6, 2013.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/***********************************************************************************
*	(c) Ger Versluis 2000 version 5.411 24 December 2001 (updated Jan 31st, 2003 by Dynamic Drive for Opera7)
*	For info write to menus@burmees.nl		          *
*	You may remove all comments for faster loading	          *		
***********************************************************************************/

	var NoOffFirstLineMenus=18;			// Number of first level items
var lightYellow = 'rgb(255,224,163)';
var darkYellow = 'rgb(255,204,102)';
var darkRed = 'rgb(150,0,51)';
	var LowBgColor=darkYellow;		// Background color when mouse is not 
	var LowSubBgColor=darkYellow;		// Background color when mouse is not over on subs
	var HighBgColor=lightYellow ;		// Background color when mouse is over
	var HighSubBgColor=lightYellow ;		// Background color when mouse is over on subs
	var FontLowColor=darkRed;			// Font color when mouse is not over
	var FontSubLowColor=darkRed;			// Font color subs when mouse is not over
	var FontHighColor=darkRed;			// Font color when mouse is over
	var FontSubHighColor=darkRed;			// Font color subs when mouse is over
	var BorderColor='white';			// Border color
	var BorderSubColor='white';			// Border color for subs

	
	var BorderWidth=1;				// Border width
	var BorderBtwnElmnts=1;			// Border between elements 1 or 0
	var FontFamily="arial,comic sans ms,technical"	// Font family menu items
	var FontSize=8;				// Font size menu items
	var FontBold=1;				// Bold menu items 1 or 0
	var FontItalic=0;				// Italic menu items 1 or 0
	var MenuTextCentered='left';			// Item text position 'left', 'center' or 'right'
	var MenuCentered='left';			// Menu horizontal position 'left', 'center' or 'right'
	var MenuVerticalCentered='top';		// Menu vertical position 'top', 'middle','bottom' or static
	var ChildOverlap=0.05;				// horizontal overlap child/ parent
	var ChildVerticalOverlap=.2;			// vertical overlap child/ parent
	var StartTop=140;				// Menu offset x coordinate
	var StartLeft=8;				// Menu offset y coordinate
	var VerCorrect=0;				// Multiple frames y correction
	var HorCorrect=0;				// Multiple frames x correction
	var LeftPaddng=3;				// Left padding
	var TopPaddng=3;				// Top padding
	var FirstLineHorizontal=0;			// SET TO 1 FOR HORIZONTAL MENU, 0 FOR VERTICAL
	var MenuFramesVertical=1;			// Frames in cols or rows 1 or 0
	var DissapearDelay=1000;			// delay before menu folds in
	var TakeOverBgColor=1;			// Menu frame takes over background color subitem frame
	var FirstLineFrame='navig';			// Frame where first level appears
	var SecLineFrame='space';			// Frame where sub levels appear
	var DocTargetFrame='space';			// Frame where target documents appear
	var TargetLoc='';				// span id for relative positioning
	var HideTop=0;				// Hide first level when loading new document 1 or 0
	var MenuWrap=1;				// enables/ disables menu wrap 1 or 0
	var RightToLeft=0;				// enables/ disables right to left unfold 1 or 0
	var UnfoldsOnClick=0;			// Level 1 unfolds onclick/ onmouseover
	var WebMasterCheck=0;			// menu tree checking on or off 1 or 0
	var ShowArrow=1;				// Uses arrow gifs when 1
	var KeepHilite=1;				// Keep selected path highligthed
	var Arrws=['tri.gif',5,10,'tridown.gif',10,5,'trileft.gif',5,10];	// Arrow source, width and height

function BeforeStart(){return}
function AfterBuild(){return}
function BeforeFirstOpen(){return}
function AfterCloseAll(){return}


// Menu tree
//	MenuX=new Array(Text to show, Link, background image (optional), number of sub elements, height, width);
//	For rollover images set "Text to show" to:  "rollover:Image1.jpg:Image2.jpg"


Menu1=new Array("Recent Updates: Dec 09","updates.htm","",0,20,150);

Menu2=new Array("Manual Home","index.htm","",0,20,155);
Menu3=new Array("MacBiophotonics Home","/web/20120208073234/http://www.macbiophotonics.ca","",0,20,200);


Menu4=new Array("About this Manual","about_this_manual.htm","",0,20,150);

Menu5=new Array("Installation", "installing_imagej.htm","",0,20,150);




Menu6=new Array("Importing Image Files","importing_image_files.htm" ,"",4);
	Menu6_1=new Array("LOCI Bio-Formats","importing_image_files.htm#2.1_Bio-Formats_Importer_","",0,20,150);
	Menu6_2=new Array("*.LSM","importing_image_files.htm#Import_LSM","",0,20,100);
	Menu6_3=new Array("*.AVI","importing_image_files.htm#Import_AVI","",0);
	Menu6_4=new Array("Other formats","importing_image_files.htm#Import_other","",0);


Menu7=new Array("Saving and Exporting","saving_and_exporting.htm","",0,20,150);


Menu8=new Array("Intensity v Time analysis","intensity_vs_time_ana.htm" ,"",6);
	Menu8_1=new Array("Brightness & Contrast","intensity_vs_time_ana.htm#IntvTime_BnC","",0,20,170);
	Menu8_2=new Array("Intensity from a single ROI","intensity_vs_time_ana.htm#IntvTime_1ROI","",0);
	Menu8_3=new Array("Dynamic Int. v T analysis","intensity_vs_time_ana.htm#IntvTime_dynamic","",0);
	Menu8_4=new Array("Ratiometric analysis","intensity_vs_time_ana.htm#Ratiometric","",0);
	Menu8_5=new Array("Extracting Timestamp Data","intensity_vs_time_ana.htm#IntvTime_timestamp","",0);
	Menu8_6=new Array("Pseudo-Linescan","intensity_vs_time_ana.htm#IntvTime_pseudoline","",0);


Menu9=new Array("Particle Analysis","particle_analysis.htm" ,"",2);
	Menu9_1=new Array("Automated Particle Analysis","particle_analysis.htm#particle_auto","",0,20,170);
	Menu9_2=new Array("Manual Particle Analysis","particle_analysis.htm#particle_manual","",0);
	
Menu10=new Array("Colocalisation Analysis","colour_analysis.htm" ,"",5);
	Menu10_1=new Array("Intensity Correlation Analysis","colour_analysis.htm#coloc_ica","",0,20,200);
	Menu10_2=new Array("Mander's coefficients","colour_analysis.htm#coloc_coeff","",0,20,200);
	Menu10_3=new Array("Colocalisation Test","colour_analysis.htm#6.2 Colocalisation Test","",0);
	Menu10_4=new Array("Colocalisation Threshold","colour_analysis.htm#6.3 Colocalisation Threshold","",0);
	Menu10_5=new Array("Highlighting Colocalised Pixels","colour_analysis.htm#coloc_hilight","",0);
	
Menu11=new Array("Intensity Processing","image_intensity_proce.htm" ,"",7);
	Menu11_1=new Array("Brightness & Contrast","image_intensity_proce.htm#intensity_BnC","",0,20,200);
	Menu11_2=new Array("Histogram Equalisation","image_intensity_proce.htm#intensity_nonLinear","",0);
	Menu11_3=new Array("Gamma","image_intensity_proce.htm#intensity_filter","",0);
	Menu11_4=new Array("Smoothing","colour_analysis.htm#coloc_hilight","",0);
	Menu11_5=new Array("Background correction","image_intensity_proce.htm#intensity_BG","",0);
	Menu11_6=new Array("Flat-field correction","image_intensity_proce.htm#intensity_flat","",0);
	Menu11_7=new Array("Masking unwanted regions","image_intensity_proce.htm#intensity_mask","",0);

	
Menu12=new Array("Colour Image Processing","colour_image_processi.htm" ,"",3);
	Menu12_1=new Array("Merging Multi-Channel Images","colour_image_processi.htm#color_merge","",0,20,220);
	Menu12_2=new Array("Splitting Merged Image to Montage","colour_image_processi.htm#2montage","",0);
	Menu12_3=new Array("Pseudocolour","colour_image_processi.htm#color_pseudo","",0);

Menu13=new Array("Stack-slice manipulations","stack.htm" ,"",4);
	Menu13_1=new Array("Slice Shuffling/Deleting/Adding","stack.htm#stack_add","",0,20,200);
	Menu13_2=new Array("Stack Dimension Manipulations","stack.htm#stack_dimensions","",0);
	Menu13_3=new Array("Zoom to ROI","stack.htm#9.3 Zoomify plugin","",0);
	Menu13_4=new Array("Stack Dimension Manipulations","stack.htm#9.4 Align slices in stack","",0);


Menu14=new Array("Z-functions","z.htm" ,"",6);
	Menu14_1=new Array("Stack Projections","z.htm#z_proj","",0,20,200);
	Menu14_2=new Array("Z-coding stack","z.htm#z_code","",0,20,200);
	Menu14_3=new Array("Volume Render","z.htm#z_volume","",0);
	Menu14_4=new Array("Surface Render","z.htm#z_surf","",0);
	Menu14_5=new Array("Axial Sectioning","z.htm#z_axial","",0);
	Menu14_6=new Array("Stereo Pairs","z.htm#z_pairs","",0);


Menu15=new Array("T-functions","t.htm" ,"",5);
	Menu15_1=new Array("Correcting for Bleaching","t.htm#t_bleach","",0,20,200);
	Menu15_2=new Array("Volume Render","z.htm#z_volume","",0);
	Menu15_3=new Array("F÷F0","t.htm#t_fdivf0","",0);
	Menu15_4=new Array("Delta-F","t.htm#t_deltaF","",0);
	Menu15_5=new Array("Surface Plotting","t.htm#t_surfplot","",0);

Menu16=new Array("Deconvolution","12_deconvolution.htm" ,"",0,20,150);


Menu17=new Array("Annotating Images","annotating_images.htm" ,"",4);
	Menu17_1=new Array("Scale Bar","annotating_images.htm#annotate_scalebar","",0,20,200);
	Menu17_2=new Array("Volume Render","z.htm#z_volume","",0);
	Menu17_3=new Array("Text and Lines","annotating_images.htm#annotate_text","",0);
	Menu17_4=new Array("Time Stamps & Event Marking","annotating_images.htm#annotate_stamps","",0);


Menu18=new Array("Appendix","blank.htm" ,"",2);
	Menu18_1=new Array("Plugin Authors","appendix_1.htm","",0,20,150);
	Menu18_2=new Array("Citing Image and Plugins","appendix_ii.htm","",0);
