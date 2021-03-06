"use strict";

module.exports = function () {
	return {
		head: {
			checkSumAdjustment: 369537602,
			flags: 11,
			fontDirectionHint: 2,
			fontRevision: 1,
			glyphDataFormat: 0,
			indexToLocFormat: 0,
			lowestRecPPEM: 8,
			macStyle: 0,
			magickNumber: 1594834165,
			created: 3562553439,
			modified: 3562553439,
			unitsPerEm: 1000,
			version: 1,
			xMax: 306,
			xMin: 34,
			yMax: 682,
			yMin: 0
		},
		hhea: {
			advanceWidthMax: 374,
			ascender: 812,
			caretOffset: 0,
			caretSlopeRise: 1,
			caretSlopeRun: 0,
			descender: -212,
			lineGap: 92,
			metricDataFormat: 0,
			minLeftSideBearing: 34,
			minRightSideBearing: 68,
			numOfLongHorMetrics: 1,
			reserved0: 0,
			reserved1: 0,
			reserved2: 0,
			reserved3: 0,
			version: 1,
			xMaxExtent: 306
		},
		OS_2: {
			achVendID: "BE5N",
			panose: [2, 0, 5, 9, 0, 0, 0, 0, 0, 0],
			fsSelection: 192,
			fsType: 0,
			sCapHeight: 0,
			sFamilyClass: 0,
			sTypoAscender: 812,
			sTypoDescender: -212,
			sTypoLineGap: 92,
			sxHeight: 792,
			ulUnicodeRange1: 1,
			ulUnicodeRange2: 268435456,
			ulUnicodeRange3: 0,
			ulUnicodeRange4: 0,
			usBreakChar: 32,
			usDefaultChar: 0,
			usFirstCharIndex: 0,
			usLastCharIndex: 0,
			usMaxContext: 1,
			usWeightClass: 400,
			usWidthClass: 5,
			usWinAscent: 812,
			usWinDescent: 212,
			version: 4,
			xAvgCharWidth: 500,
			yStrikeoutPosition: 265,
			yStrikeoutSize: 51,
			ySubscriptXOffset: 0,
			ySubscriptXSize: 665,
			ySubscriptYOffset: 143,
			ySubscriptYSize: 716,
			ySuperscriptXOffset: 0,
			ySuperscriptXSize: 665,
			ySuperscriptYOffset: 491,
			ySuperscriptYSize: 716,
			ulCodePageRange1: {
				latin1: true,
				latin2: true,
				greek: true,
				cyrillic: true,
				turkish: true,
				vietnamese: true,
				macRoman: true
			},
			ulCodePageRange2: {
				cp852: true,
				cp850: true,
				ascii: true
			}
		},
		name: {
			fontFamily: "node-sfnt",
			fontSubFamily: "regular",
			fullName: "node-sfnt",
			postScriptName: "node-sfnt",
			uniqueSubFamily: "node-sfnt blank font",
			version: "Version 1.0"
		},
		post: {
			version: 2,
			isFixedPitch: false,
			italicAngle: 0,
			maxMemType1: 1,
			maxMemType42: 0,
			minMemType1: 0,
			minMemType42: 0,
			postoints: 65411,
			underlinePosition: -50,
			underlineThickness: 50
		},
		maxp: {
			version: 1.0,
			numGlyphs: 0,
			maxPoints: 0,
			maxContours: 0,
			maxCompositePoints: 0,
			maxCompositeContours: 0,
			maxZones: 2,
			maxTwilightPoints: 0,
			maxStorage: 0,
			maxFunctionDefs: 0,
			maxInstructionDefs: 0,
			maxStackElements: 0,
			maxSizeOfInstructions: 0,
			maxComponentElements: 0,
			maxComponentDepth: 0
		},
		CFF_: {
			isCID: false,
			// Use same CFF fontName for all variants, and thus `CFF ` table can be shared in OTC file.
			// “CFF2Font” is a safe choice. It is the default value when converting OpenType/CFF2 font to OpenType/CFF1 using fontTools.
			fontName: "CFF2Font"
		}
	};
};
