const messages = {
    "error": {
        "Principle1.Guideline1_1.1_1_1.H30.2": {
            explanation: "Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link.",
            appliesTo: "Image elements with an absent or empty alt attribute, that is the only non-blank content of a link."
        },
        "Principle1.Guideline1_1.1_1_1.H37": {
            explanation: "Img element missing an alt attribute. Use the alt attribute to specify a short text alternative.",
            appliesTo: "Image element (outside of a link) that is completely missing an alt attribute."
        },
        "Principle1.Guideline1_1.1_1_1.H67.1": {
            explanation: "Img element with empty alt text must have absent or empty title attribute.",
            appliesTo: "Image element (outside of a link) that is marked with an empty alt attribute (intending it to be ignored), but has a non-empty title attribute."
        },
        "Principle1.Guideline1_1.1_1_1.H36": {
            explanation: "Image submit button missing an alt attribute. Specify a text alternative that describes the button's function, using the alt attribute.",
            appliesTo: "Image submit button that has a missing or empty alt attribute."
        },
        "Principle1.Guideline1_1.1_1_1.H24": {
            explanation: "Area element in an image map missing an alt attribute. Each area element must have a text alternative that describes the function of the image map area.",
            appliesTo: "Area elements in an image map that have an empty or missing alt attribute."
        },
        "Principle1.Guideline1_1.1_1_1.H2.EG5": {
            explanation: "Img element inside a link must not use alt text that duplicates the text content of the link.",
            appliesTo: "Image inside a link along with text content, where the alt attribute duplicates the text content (after trimming)."
        },
        "Principle1.Guideline1_1.1_1_1.H2.EG4": {
            explanation: "Img element inside a link has empty or missing alt text when a link beside it contains link text. Consider combining the links.",
            appliesTo: "As described in error message."
        },
        "Principle1.Guideline1_1.1_1_1.H2.EG3": {
            explanation: "Img element inside a link must not use alt text that duplicates the content of a text link beside it.",
            appliesTo: "Image inside a link, that is next to a link that has the same text content (after trimming)."
        },
        "Principle1.Guideline1_1.1_1_1.H53": {
            explanation: "Object elements must contain a text alternative after all other alternatives are exhausted.",
            appliesTo: "Object element (or group of nested object elements) that does not contain a text alternative at the deepest level."
        },
        "Principle1.Guideline1_1.1_1_1.H35.3": {
            explanation: "Applet elements must contain a text alternative in the element's body, for browsers without support for the applet element.",
            appliesTo: "Applet element without a body text alternative."
        },
        "Principle1.Guideline1_1.1_1_1.H35.2": {
            explanation: "Applet elements must contain an alt attribute, to provide a text alternative to browsers supporting the element but are unable to load the applet.",
            appliesTo: "Applet element without an alt attribute."
        },
        "Principle1.Guideline1_3.1_3_1.H42.2": {
            explanation: "Heading tag found with no content. Text that is not intended as a heading should not be marked up with heading tags.",
            appliesTo: "Heading element (h1-h6) that has no content. Non-breaking spaces are included in definition of 'no content' in this case."
        },
        "Principle1.Guideline1_3.1_3_1.H93": {
            explanation: "Multiple labels exist with the same 'for' attribute. If these labels refer to different form controls, the controls should have unique 'id' attributes.",
            appliesTo: "Second and subsequent sightings of a specific value for the 'for' attribute. Labels should be unique per element."
        },
        "Principle1.Guideline1_3.1_3_1.H44.NonExistent": {
            explanation: "This label's 'for' attribute contains an ID that does not exist in the document.",
            appliesTo: "Label with a 'for' attribute that does not match any ID used in the document."
        },
        "Principle1.Guideline1_3.1_3_1.H44.NotFormControl": {
            explanation: "This label's 'for' attribute contains an ID that points to an element that is not a form control.",
            appliesTo: "Label with a 'for' attribute that matches an ID of an element that is not a form control (that should have a label). Specifically tested are input, select and textarea elements. Labels can only be associated with form controls, not generically with other elements."
        },
        "Principle1.Guideline1_3.1_3_1.H44.NoForAttr": {
            explanation: "Label found without a 'for' attribute, and therefore not explicitly associated with a form control.",
            appliesTo: "Label without a 'for' attribute. This means it could be being used implicitly (ie. wrapped around the field), or for some other purposes without an association with a field at all."
        },
        "Principle1.Guideline1_3.1_3_1.H44.NoId": {
            explanation: "Form control does not have an ID, therefore it cannot have an explicit label.",
            appliesTo: "Form control without an ID."
        },
        "Principle1.Guideline1_3.1_3_1.H65.3": {
            explanation: "Form control without a label contains an empty title attribute. The title attribute should identify the purpose of the control.",
            appliesTo: "Form control with no label, and has a title attribute (which it should have if no label) - but the title attribute is empty."
        },
        "Principle1.Guideline1_3.1_3_1.H44.2": {
            explanation: "Form control does not have an explicit label or title attribute, identifying the purpose of the control.",
            appliesTo: "Form control with an ID that can be used to associate a label with, but has no explicit label or title attribute."
        },
        "Principle1.Guideline1_3.1_3_1.H44.NoLabelAllowed": {
            explanation: "Label element should not be used for this type of form control.",
            appliesTo: "Form controls which do not require a label, yet one has been provided. Button and hidden elements fall into this category - buttons have a label already (the text on the button), while the latter makes no sense."
        },
        "Principle1.Guideline1_3.1_3_1.H44.1.After": {
            explanation: "The label element for this control should be placed after this element.",
            appliesTo: "Form control where the label should be placed after the element, but not. Radio and checkbox inputs fall into this category."
        },
        "Principle1.Guideline1_3.1_3_1.H44.1.Before": {
            explanation: "The label element for this control should be placed before this element.",
            appliesTo: "Form control where the label should be placed before the element, but not. Textbox based inputs fall into this category (including text, textarea, password, file upload, ...)."
        },
        "Principle1.Guideline1_3.1_3_1.H63.3": {
            explanation: "Table cell has an invalid scope attribute. Valid values are row, col, rowgroup, or colgroup.",
            appliesTo: "TH element with an invalid scope attribute."
        },
        "Principle1.Guideline1_3.1_3_1.H43.IncorrectAttr": {
            explanation: "Incorrect headers attribute on this td element. Expected '[expected headers]' but found '[actual headers]'",
            appliesTo: "TD element with a headers attribute which does not match the one expected from its relevant header cells (the IDs of the TH elements it is aligned with). The test ignores extra white space, and the headers can be in any order, as long as they are there."
        },
        "Principle1.Guideline1_3.1_3_1.H43.HeadersRequired": {
            explanation: "The relationship between td elements and their associated th elements is not defined. As this table has multiple levels of th elements, you must use the headers attribute on td elements.",
            appliesTo: "Table with multiple levels of row or column headers, not using headers attributes at all."
        },
        "Principle1.Guideline1_3.1_3_1.H43.MissingHeaderIds": {
            explanation: "Not all th elements in this table contain an id attribute. These cells should contain ids so that they may be referenced by td elements headers attributes.",
            appliesTo: "Table where not all TH elements contain IDs."
        },
        "Principle1.Guideline1_3.1_3_1.H43.MissingHeadersAttrs": {
            explanation: "Not all td elements in this table contain a headers attribute. Each headers attribute should list the ids of all th elements associated with that cell.",
            appliesTo: "Table where not all TD elements contain headers attributes (but some do)."
        },
        "Principle1.Guideline1_3.1_3_1.H43,H63": {
            explanation: "The relationship between td elements and their associated th elements is not defined. Use either the scope attribute on th elements, or the headers attribute on td elements.",
            appliesTo: "Table with a single levels of row AND column headers, not using headers or scope attributes at all. (Either is acceptable in this situation.)"
        },
        "Principle1.Guideline1_3.1_3_1.H63.1": {
            explanation: "Not all th elements in this table have a scope attribute. These cells should contain a scope attribute to identify their association with td elements.",
            appliesTo: "Table where some TH elements contain scope attributes - signifying an intention to use that format of association (and it's allowed) - but not all of them do."
        },
        "Principle1.Guideline1_3.1_3_1.H39,H73.4": {
            explanation: "If this table is a data table, and both a summary attribute and a caption element are present, the summary should not duplicate the caption.",
            appliesTo: "Table where the summary attribute and caption element match exactly (after trimming)."
        },
        "Principle1.Guideline1_3.1_3_1.H71": {
            explanation: "Fieldset does not contain a legend element. All fieldsets should contain a legend element that describes a description of the field group.",
            appliesTo: "Fieldset without legend element."
        },
        "Principle1.Guideline1_3.1_3_1.H71.2": {
            explanation: "Radio buttons or check boxes with the same name attribute must be contained within a fieldset element.",
            appliesTo: "Radio or checkbox inputs with the same name attribute, signifying they are part of a group, but with no fieldset marking them up as such."
        },
        "Principle1.Guideline1_3.1_3_1.G141": {
            explanation: "The heading structure is not logically nested. This [heading] element (should be a [correct heading] to be properly nested / appears to be the primary document heading, so should be an h1 element).",
            appliesTo: "Header elements when a skip of a heading level is detected - for example, H2 followed by H4. Error at AAA level, as violation of Success Criterion 2.4.10."
        },
        "Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Text": {
            explanation: "Invalid autocomplete value. Element does not belong to Text control group.",
            appliesTo: "Input, select, or textarea elements with an autocomplete attribute."
        },
        "Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Multiline": {
            explanation: "Invalid autocomplete value. Element does not belong to Multiline control group.",
            appliesTo: "Input, select, or textarea elements with an autocomplete attribute."
        },
        "Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Password": {
            explanation: "Invalid autocomplete value. Element does not belong to Password control group.",
            appliesTo: "Input, select, or textarea elements with an autocomplete attribute."
        },
        "Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Url": {
            explanation: "Invalid autocomplete value. Element does not belong to Url control group.",
            appliesTo: "Input, select, or textarea elements with an autocomplete attribute."
        },
        "Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Telephone": {
            explanation: "Invalid autocomplete value. Element does not belong to Telephone control group.",
            appliesTo: "Input, select, or textarea elements with an autocomplete attribute."
        },
        "Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Numeric": {
            explanation: "Invalid autocomplete value. Element does not belong to Numeric control group.",
            appliesTo: "Input, select, or textarea elements with an autocomplete attribute."
        },
        "Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Month": {
            explanation: "Invalid autocomplete value. Element does not belong to Month control group.",
            appliesTo: "Input, select, or textarea elements with an autocomplete attribute."
        },
        "Principle1.Guideline1_3.1_3_5_H98.InvalidAutocomplete_Date": {
            explanation: "Invalid autocomplete value. Element does not belong to Date control group.",
            appliesTo: "Input, select, or textarea elements with an autocomplete attribute."
        },
        "Principle1.Guideline1_4.1_4_3.G18": {
            explanation: "This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of {value}. Recommendation: {colour recommendations}.",
            appliesTo: "Elements with text with colours that have insufficient colour contrast for Level AA's requirements."
        },
        "Principle1.Guideline1_4.1_4_3.G145": {
            explanation: "This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 3:1, but text in this element has a contrast ratio of {value}. Recommendation: {colour recommendations}.",
            appliesTo: "Elements with text with colours that have insufficient colour contrast for the Level AA's requirements for 'large text'. The recommendation will contain a suggestion as to a colour change(s) that will satisfy the Success Criterion."
        },
        "Principle1.Guideline1_4.1_4_6.G17": {
            explanation: "This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 7:1, but text in this element has a contrast ratio of {value}. Recommendation: {colour recommendations}.",
            appliesTo: "Elements with text with colours that have insufficient colour contrast for Level AAA's requirements. The recommendation will contain a suggestion as to a colour change(s) that will satisfy the Success Criterion."
        },
        "Principle1.Guideline1_4.1_4_6.G18": {
            explanation: "This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least 4.5:1, but text in this element has a contrast ratio of {value}. Recommendation: {colour recommendations}.",
            appliesTo: "Elements with text with colours that have insufficient colour contrast for the Level AAA's requirements for 'large text'. The recommendation will contain a suggestion as to a colour change(s) that will satisfy the Success Criterion."
        },
        "Principle2.Guideline2_2.2_2_1.F40.2": {
            explanation: "Meta refresh tag used to redirect to another page, with a time limit that is not zero. Users cannot control this time limit.",
            appliesTo: "Meta refresh element with a timeout greater than zero (with a URL to redirect to)."
        },
        "Principle2.Guideline2_2.2_2_1.F41.2": {
            explanation: "Meta refresh tag used to refresh the current page. Users cannot control the time limit for this refresh.",
            appliesTo: "Meta refresh element with a timeout greater than zero (and no URL, indicating \"refresh the current URL\")."
        },
        "Principle2.Guideline2_2.2_2_2.F47": {
            explanation: "Blink elements cannot satisfy the requirement that blinking information can be stopped within five seconds.",
            appliesTo: "Blink elements, in general."
        },
        "Principle2.Guideline2_4.2_4_1.H64.1": {
            explanation: "Iframe element requires a non-empty title attribute that identifies the frame.",
            appliesTo: "Iframe elements that have missing or empty title attribute."
        },
        "Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchId": {
            explanation: "This link points to a named anchor \"[link target]\" within the document, but no anchor exists with that name.",
            appliesTo: "Anchor (a) or area element with a href element pointing to an anchor in the same document, such as \"#content\", but where that anchor - defined through an ID (anywhere), or a name attribute on an \"a\" attribute - does not exist. Applies to full documents."
        },
        "Principle2.Guideline2_4.2_4_2.H25.1.NoTitleEl": {
            explanation: "A title should be provided for the document, using a non-empty title element in the head section.",
            appliesTo: "Document with a head section, but missing a title attribute."
        },
        "Principle2.Guideline2_4.2_4_2.H25.1.EmptyTitle": {
            explanation: "The title element in the head section should be non-empty.",
            appliesTo: "Title element that exists, but is empty."
        },
        "Principle2.Guideline2_4.2_4_8.H59.1": {
            explanation: "Link elements can only be located in the head section of the document.",
            appliesTo: "Link element placed outside the head element of the document."
        },
        "Principle2.Guideline2_4.2_4_8.H59.2a": {
            explanation: "Link element is missing a non-empty rel attribute identifying the link type.",
            appliesTo: "Link element with missing or empty rel attribute."
        },
        "Principle2.Guideline2_4.2_4_8.H59.2b": {
            explanation: "Link element is missing a non-empty href attribute pointing to the resource being linked.",
            appliesTo: "Link element with missing or empty href attribute."
        },
        "Principle3.Guideline3_1.3_1_1.H57.2": {
            explanation: "The html element should have a lang or xml:lang attribute which describes the language of the document.",
            appliesTo: "HTML element with no language attributes."
        },
        "Principle3.Guideline3_1.3_1_1.H57.3.Lang": {
            explanation: "The language specified in the lang attribute of the document element does not appear to be well-formed.",
            appliesTo: "HTML element with a lang attribute (as used in HTML 4 and 5, including 'polyglot' versions thereof) that is not well-formed."
        },
        "Principle3.Guideline3_1.3_1_1.H57.3.XmlLang": {
            explanation: "The language specified in the xml:lang attribute of the document element does not appear to be well-formed.",
            appliesTo: "HTML element with an xml:lang attribute (as used by XHTML) that is not well-formed."
        },
        "Principle3.Guideline3_1.3_1_2.H58.1.Lang": {
            explanation: "The language specified in the lang attribute of this element does not appear to be well-formed.",
            appliesTo: "Element (other than a HTML element) with a lang attribute (as used in HTML 4 and 5, including 'polyglot' versions thereof) that is not well-formed."
        },
        "Principle3.Guideline3_1.3_1_2.H58.1.XmlLang": {
            explanation: "The language specified in the xml:lang attribute of this element does not appear to be well-formed.",
            appliesTo: "Element (other than a HTML element) with an xml:lang attribute (as used by XHTML) that is not well-formed."
        },
        "Principle3.Guideline3_1.3_1_6.H62.1.HTML5": {
            explanation: "Ruby element does not contain an rt element containing pronunciation information for its body text.",
            appliesTo: "Ruby element without a child rt element. This is the HTML5 version of ruby, where the base text is placed in the body of the ruby element."
        },
        "Principle3.Guideline3_1.3_1_6.H62.1.XHTML11": {
            explanation: "Ruby element does not contain an rt element containing pronunciation information for the text inside the rb element.",
            appliesTo: "Ruby element without a child rt element. This is the XHTML 1.1 version of ruby, where the base text is placed in a child rb element."
        },
        "Principle3.Guideline3_1.3_1_6.H62.2": {
            explanation: "Ruby element does not contain rp elements, which provide extra punctuation to browsers not supporting ruby text.",
            appliesTo: "Ruby element without child rp elements. These are necessary to provide punctuation for browsers that do not support ruby text."
        },
        "Principle3.Guideline3_2.3_2_2.H32.2": {
            explanation: "Form does not contain a submit button (input type=\"submit\", input type=\"image\", or button type=\"submit\").",
            appliesTo: "Forms which do not provide an ability on their interface to be submitted using the mouse."
        },
        "Principle4.Guideline4_1.4_1_1.F77": {
            explanation: "Second and subsequent sightings of an element ID.",
            appliesTo: "Anchor element with an ID but without a href or link text. Consider moving its ID to a parent or nearby element."
        },
        "Principle4.Guideline4_1.4_1_2.H91.A.EmptyNoId": {
            explanation: "Anchor element found with no link content and no name and/or ID attribute.",
            appliesTo: "Completely empty anchor element (no text, no href, no ID)."
        },
        "Principle4.Guideline4_1.4_1_2.H91.A.NoContent": {
            explanation: "Link with a href attribute, but without link text.",
            appliesTo: "Link with a href attribute, but without link text."
        },
        "Principle4.Guideline4_1.4_1_2.H91..*.Name": {
            explanation: "This [element type] does not have a name available to an accessibility API.",
            appliesTo: "Form control which does not have a valid accessibility API 'name'."
        },
        "Principle4.Guideline4_1.4_1_2.H91..*.Value": {
            explanation: "This [element type] does not have a value available to an accessibility API.",
            appliesTo: "Form control which does not have a valid accessibility API 'value'."
        },
        "Principle1.Guideline1_1.1_1_1.H67.2": {
            explanation: "Img element is marked so that it is ignored by Assistive Technology.",
            appliesTo: "Image element (outside of a link) that is marked with an empty alt attribute, and its title attribute is empty or absent."
        },
        "Principle1.Guideline1_3.1_3_1.H44.NonExistentFragment": {
            explanation: "This label's 'for' attribute contains an ID that does not exist in the document fragment.",
            appliesTo: "Label with a 'for' attribute that does not match any ID used in the document fragment. This is does not"
        },
        "Principle1.Guideline1_3.1_3_1.H65": {
            explanation: "Check that the title attribute identifies the purpose of the control, and that a label element is not appropriate.",
            appliesTo: "Form control with a validly specified title attribute (no label). Title attributes are meant to only be used where the visual design does not permit the inclusion of a visible label."
        },
        "Principle1.Guideline1_3.1_3_1.H49": {
            explanation: "Semantic markup should be used to mark emphasised or special text so that it can be programmatically determined.",
            appliesTo: "Element that is used for presentational purposes (by HTML 4's standards). The element code contains a title-cased version of the offending node name, to allow separate resolutions for each type of element (eg. B with STRONG)."
        },
        "Principle1.Guideline1_3.1_3_1.H49.AlignAttr": {
            explanation: "Semantic markup should be used to mark emphasised or special text so that it can be programmatically determined.",
            appliesTo: "Element with a align attribute. It should use CSS (text-align in text-related elements like paragraphs, or float with image floating)."
        },
        "Principle1.Guideline1_3.1_3_1.H42": {
            explanation: "Heading markup should be used if this content is intended as a heading.",
            appliesTo: "Paragraph of text that appears to have bold or italic content (whether through b/i or strong/em) as its only child."
        },
        "Principle1.Guideline1_3.1_3_1.H63.2": {
            explanation: "Scope attributes on td elements that act as headers for other elements are obsolete in HTML5. Use a th element instead.",
            appliesTo: "TD element with a scope attribute. This is legal in HTML 4 but obsolete in HTML 5."
        },
        "Principle1.Guideline1_3.1_3_1.H43.ScopeAmbiguous": {
            explanation: "Scope attributes on th elements are ambiguous in a table with multiple levels of headings. Use the headers attribute on td elements instead.",
            appliesTo: "Table with multiple levels of row or column headers, but using scope attribute. In this case, the headers attribute MUST be used; scope is not sufficient."
        },
        "Principle1.Guideline1_3.1_3_1.H73.3.NoSummary": {
            explanation: "If this table is a data table, consider using the summary attribute of the table element to give an overview of this table.",
            appliesTo: "Table without summary attribute."
        },
        "Principle1.Guideline1_3.1_3_1.H39.3.NoCaption": {
            explanation: "If this table is a data table, consider using a caption element to the table element to identify this table.",
            appliesTo: "Table without caption element."
        },
        "Principle1.Guideline1_3.1_3_1.H85.2": {
            explanation: "If this selection list contains groups of related options, they should be grouped with optgroup.",
            appliesTo: "Select element not using optgroups. Use of optgroup may or may not be necessary, hence defined as a warning."
        },
        "Principle1.Guideline1_3.1_3_1.H48.1": {
            explanation: "Content appears to have the visual appearance of a bulleted list. It may be appropriate to mark this content up using a ul element.",
            appliesTo: "Paragraph content appearing like a bulleted list in text."
        },
        "Principle1.Guideline1_3.1_3_1.H48.2": {
            explanation: "Content appears to have the visual appearance of a numbered list. It may be appropriate to mark this content up using an ol element.",
            appliesTo: "Paragraph content appearing like a numbered list in text."
        },
        "Principle1.Guideline1_3.1_3_1.H48": {
            explanation: "If this element contains a navigation section, it is recommended that it be marked up as a list.",
            appliesTo: "P or DIV element that has more than one link."
        },
        "Principle1.Guideline1_3.1_3_5_H98.FaultyValue": {
            explanation: "This element contains a potentially faulty value in its autocomplete attribute.",
            appliesTo: "Input, select, or textarea elements with an autocomplete attribute."
        },
        "Principle1.Guideline1_4.1_4_3.F24.BGColour": {
            explanation: "Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.",
            appliesTo: "Elements with a background style or bgcolor attribute, without a corresponding foreground color style or attribute."
        },
        "Principle1.Guideline1_4.1_4_3.F24.FGColour": {
            explanation: "Check that this element has an inherited background colour or image to complement the corresponding inline foreground colour.",
            appliesTo: "Elements with a foreground color style or attribute, without a corresponding background color style or bgcolor attribute."
        },
        "Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed": {
            explanation: "This element has \"position: fixed\". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.",
            appliesTo: "Top element with \"position: fixed\"."
        },
        "Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling": {
            explanation: "Preformatted text may require scrolling in two dimensions, which is considered a failure of this Success Criterion.",
            appliesTo: "Pre elements."
        },
        "Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom": {
            explanation: "Interfering with a user agent's ability to zoom may be a failure of this Success Criterion.",
            appliesTo: "Meta element with a name of \"viewport\" that defines scaling rules."
        },
        "Principle2.Guideline2_1.2_1_1.SCR20.DblClick": {
            explanation: "Ensure the functionality provided by double-clicking on this element is available through the keyboard.",
            appliesTo: "Elements with an inline ondblclick attribute."
        },
        "Principle2.Guideline2_1.2_1_1.SCR20.MouseOver": {
            explanation: "Ensure the functionality provided by mousing over this element is available through the keyboard; for instance, using the focus event.",
            appliesTo: "Elements with an inline onmouseover attribute."
        },
        "Principle2.Guideline2_1.2_1_1.SCR20.MouseOut": {
            explanation: "Ensure the functionality provided by mousing out of this element is available through the keyboard; for instance, using the blur event.",
            appliesTo: "Elements with an inline onmouseout attribute."
        },
        "Principle2.Guideline2_1.2_1_1.SCR20.MouseMove": {
            explanation: "Ensure the functionality provided by moving the mouse on this element is available through the keyboard.",
            appliesTo: "Elements with an inline onmousemove attribute."
        },
        "Principle2.Guideline2_1.2_1_1.SCR20.MouseDown": {
            explanation: "Ensure the functionality provided by mousing down on this element is available through the keyboard; for instance, using the keydown event.",
            appliesTo: "Elements with an inline onmousedown attribute."
        },
        "Principle2.Guideline2_1.2_1_1.SCR20.MouseUp": {
            explanation: "Ensure the functionality provided by mousing up on this element is available through the keyboard; for instance, using the keyup event.",
            appliesTo: "Elements with an inline onmouseup attribute."
        },
        "Principle2.Guideline2_1.2_1_2.F10": {
            explanation: "Check that this applet or plugin provides the ability to move the focus away from itself when using the keyboard.",
            appliesTo: "Applet or object elements."
        },
        "Principle2.Guideline2_2.2_2_2.F4": {
            explanation: "Ensure there is a mechanism available to stop this blinking element in less than five seconds.",
            appliesTo: "Elements that have a blink style (text-decoration: blink). There must be some method (via scripting, for example) to be able to turn these off within 5 seconds."
        },
        "Principle2.Guideline2_4.2_4_1.G1,G123,G124.NoSuchIdFragment2.4.2": {
            explanation: "This link points to a named anchor \"[link target]\" within the document, but no anchor exists with that name in the fragment tested.",
            appliesTo: "Anchor (a) or area element with a href element pointing to an ID in the same document, such as \"#content\", but where that anchor - defined through an ID (anywhere), or a name attribute on an \"a\" attribute - does not exist. Applies to document fragments: such a message is non-authoritative, as it depends on the document around it."
        },
        "Principle1.Guideline2_5.2_5_3_F96.AccessibleName": {
            explanation: "Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.",
            appliesTo: "Anchor (A), button, and input elements. Also applies to all elements with a label."
        },
        "Principle1.Guideline2_5.2_5_4.Devicemotion": {
            explanation: "This element has a devicemotion event listener. Check that functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when: Supported Interface: The motion is used to operate functionality through an accessibility supported interface; Essential: The motion is essential for the function and doing so would invalidate the activity.",
            appliesTo: "Elements with an \"ondevicemotion\" event."
        },
        "Principle3.Guideline3_2.3_2_5.H83.3": {
            explanation: "Check that this link's link text contains information indicating that the link will open in a new window.",
            appliesTo: "Link elements that have a \"_blank\" target attribute, meaning it will open in a new window, but do not have text saying that (the words \"new window\" are looked for, specifically, case insensitive)."
        },
        "Principle4.Guideline4_1.4_1_2.H91.A.Empty": {
            explanation: "Empty anchor element (no text, no href) but with an ID. In HTML5, this breaks the intended role of an 'A' element being a link.",
            appliesTo: "Anchor element with an ID but without a href or link text. Consider moving its ID to a parent or nearby element."
        },
        "Principle4.Guideline4_1.4_1_2.H91.A.EmptyWithName": {
            explanation: "Empty anchor element (no text, no href) but with a name attribute. In HTML5, this breaks the intended role of an 'A' element being a link, and the name attribute is also obsolete.",
            appliesTo: "Anchor element with a name attribute but without a href or link text. Consider moving the name attribute to become an ID of a parent or nearby element."
        },
        "Principle4.Guideline4_1.4_1_2.H91.A.NoHref": {
            explanation: "Anchor element with no href, but with an ID and text. This breaks the intended role of an 'A' element being a link.",
            appliesTo: "Anchor element with link content, but no href and/or ID attribute has been supplied."
        },
        "Principle4.Guideline4_1.4_1_2.H91.A.Placeholder": {
            explanation: "Anchor element found with link content, but no href and/or ID attribute has been supplied.",
            appliesTo: "Link with text, but no href or ID."
        },
        "Principle1.Guideline1_1.1_1_1.G94.Image": {
            explanation: "Ensure that the img element's alt text serves the same purpose and presents the same information as the image.",
            appliesTo: "Images with alt text, in general."
        },
        "Principle1.Guideline1_1.1_1_1.G94.Button": {
            explanation: "Ensure that the image submit button's alt text identifies the purpose of the button.",
            appliesTo: "Image submit buttons in general."
        },
        "Principle1.Guideline1_1.1_1_1.H24.2": {
            explanation: "Ensure that the area element's text alternative serves the same purpose as the part of image map image it references.",
            appliesTo: "Area elements with alt text, in general."
        },
        "Principle1.Guideline1_1.1_1_1.G73,G74": {
            explanation: "If this image cannot be fully described in a short text alternative, ensure a long text alternative is also available, such as in the body text or through a link.",
            appliesTo: "Images with alt text, in general."
        },
        "Principle1.Guideline1_1.1_1_1.G94,G92.Object": {
            explanation: "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
            appliesTo: "Object elements (with a correctly specified text alternative) in general."
        },
        "Principle1.Guideline1_1.1_1_1.G94,G92.Applet": {
            explanation: "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
            appliesTo: "Applet elements (with correctly specified text alternatives) in general."
        },
        "Principle1.Guideline1_2.1_2_1.G158": {
            explanation: "If this embedded object contains pre-recorded audio only, and is not provided as an alternative for text content, check that an alternative text version is available.",
            appliesTo: "Elements which may contain audio."
        },
        "Principle1.Guideline1_2.1_2_1.G159,G166": {
            explanation: "If this embedded object contains pre-recorded video only, and is not provided as an alternative for text content, check that an alternative text version is available, or an audio track is provided that presents equivalent information.",
            appliesTo: "Elements which may contain video."
        },
        "Principle1.Guideline1_2.1_2_2.G87,G93": {
            explanation: "If this embedded object contains pre-recorded synchronised media and is not provided as an alternative for text content, check that captions are provided for audio content.",
            appliesTo: "Elements which may contain synchronised media."
        },
        "Principle1.Guideline1_2.1_2_3.G69,G78,G173,G8": {
            explanation: "If this embedded object contains pre-recorded synchronised media and is not provided as an alternative for text content, check that an audio description of its video, and/or an alternative text version of the content is provided.",
            appliesTo: "Elements which may contain synchronised media."
        },
        "Principle1.Guideline1_2.1_2_4.G9,G87,G93": {
            explanation: "If this embedded object contains synchronised media, check that captions are provided for live audio content.",
            appliesTo: "Elements which may contain synchronised media."
        },
        "Principle1.Guideline1_2.1_2_5.G78,G173,G8": {
            explanation: "If this embedded object contains pre-recorded synchronised media, check that an audio description is provided for its video content.",
            appliesTo: "Elements which may contain synchronised media."
        },
        "Principle1.Guideline1_2.1_2_6.G54,G81": {
            explanation: "If this embedded object contains pre-recorded synchronised media, check that a sign language interpretation is provided for its audio.",
            appliesTo: "Elements which may contain synchronised media."
        },
        "Principle1.Guideline1_2.1_2_7.G8": {
            explanation: "If this embedded object contains synchronised media, and where pauses in foreground audio is not sufficient to allow audio descriptions to convey the sense of pre-recorded video, check that an extended audio description is provided, either through scripting or an alternate version.",
            appliesTo: "Elements which may contain synchronised media."
        },
        "Principle1.Guideline1_2.1_2_8.G69,G159": {
            explanation: "If this embedded object contains pre-recorded synchronised media or video-only content, check that an alternative text version of the content is provided.",
            appliesTo: "Elements which may contain synchronised media."
        },
        "Principle1.Guideline1_2.1_2_9.G150,G151,G157": {
            explanation: "If this embedded object contains live audio-only content, check that an alternative text version of the content is provided.",
            appliesTo: "Elements which may contain audio."
        }, 
        "Principle1.Guideline1_3.1_3_1.H73.3.Check": {
            explanation: "If this table is a data table, check that the summary attribute describes the tables organization or explains how to use the table.",
            appliesTo: "Table with specified summary attribute."
        },    
        "Principle1.Guideline1_3.1_3_1.H39.3.Check": {
            explanation: "If this table is a data table, check that the caption element accurately describes this table.",
            appliesTo: "Table with specified caption element."
        },
        "Principle1.Guideline1_3.1_3_1": {
            explanation: "The element has the attribute presentation, which indicates that it is for presentation only and does not have semantic meaning. This is not recommended.",
            appliesTo: "Element with the presentation attribute."
        },
        "Principle1.Guideline1_3.1_3_2.G57": {
            explanation: "When the sequence in which content is presented affects its meaning, a correct reading sequence can be programmatically determined.",
            appliesTo: "Top element."
        },
        "Principle1.Guideline1_3.1_3_3.G96": {
            explanation: "Instructions provided for understanding and operating content do not rely solely on sensory characteristics of components such as shape, size, visual location, orientation, or sound.",
            appliesTo: "Top element."
        },
        "Principle1.Guideline1_3.1_3_4.RestrictView": {
            explanation: "Content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is essential.",
            appliesTo: "Top element."
        },
        "Principle1.Guideline1_3.1_3_5_H98.Purpose": {
            explanation: "Check that the input field serves a purpose identified in the Input Purposes for User Interface Components section; and that the content is implemented using technologies with support for identifying the expected meaning for form input data.",
            appliesTo: "Input, select, or textarea elements with an autocomplete attribute."
        },
        "Principle1.Guideline1_3.1_3_5_H98.MissingAutocomplete": {
            explanation: "This element does not have an autocomplete attribute. If this field collects information about the user, consider adding one to comply with this Success Criterion.",
            appliesTo: "Input, select, or textarea elements with an autocomplete attribute."
        },
        "Principle1.Guideline1_3.1_3_6_ARIA11.Check": {
            explanation: "Check that the purpose of User Interface Components, icons, and regions can be programmatically determined.",
            appliesTo: "Top element."
        },
        "Principle1.Guideline1_4.1_4_1.G14,G182": {
            explanation: "Check that any information conveyed using colour alone is also available in text, or through other visual cues.",
            appliesTo: "Top element."
        },
        "Principle1.Guideline1_4.1_4_2.F23": {
            explanation: "If any audio plays automatically for longer than 3 seconds, check that there is the ability to pause, stop or mute the audio.",
            appliesTo: "Top element."
        },
        "Principle1.Guideline1_4.1_4_4.G142": {
            explanation: "Check that text can be resized without assistive technology up to 200 percent without loss of content or functionality.",
            appliesTo: "Top element."
        },
        "Principle1.Guideline1_4.1_4_5.G140,C22,C30.AALevel": {
            explanation: "If the technologies being used can achieve the visual presentation, check that text is used to convey information rather than images of text, except when the image of text is essential to the information being conveyed, or can be visually customised to the user's requirements.",
            appliesTo: "Top element."
        },
        "Principle1.Guideline1_4.1_4_7.G56": {
            explanation: "For pre-recorded audio-only content that is primarily speech (such as narration), any background sounds should be muteable, or be at least 20 dB (or about 4 times) quieter than the speech.",
            appliesTo: "Top element."
        },
        "Principle1.Guideline1_4.1_4_8.G148,G156,G175": {
            explanation: "Check that a mechanism is available for the user to select foreground and background colours for blocks of text, either through the Web page or the browser.",
            appliesTo: "Top element."
        },
        "Principle1.Guideline1_4.1_4_8.H87,C20": {
            explanation: "Check that blocks of text are not fully justified - that is, to both left and right edges - or a mechanism exists to remove full justification.",
            appliesTo: "Top element."
        },
        "Principle1.Guideline1_4.1_4_8.C19,G172,G169": {
            explanation: "Check that line spacing in blocks of text are at least 150% in paragraphs, and paragraph spacing is at least 1.5 times the line spacing, or that a mechanism is available to achieve this.",
            appliesTo: "Top element."
        },
        "Principle1.Guideline1_4.1_4_8.G188,C21": {
            explanation: "Check that text can be resized without assistive technology up to 200 percent without requiring the user to scroll horizontally on a full-screen window.",
            appliesTo: "Top element."
        },
        "Principle1.Guideline1_4.1_4_8.H87,G146,C26": {
            explanation: "Check that text can be resized without assistive technology up to 200 percent without requiring the user to scroll horizontally on a full-screen window.",
            appliesTo: "Top element."
        },
        "Principle1.Guideline1_4.1_4_9.G140,C22,C30.NoException": {
            explanation: "Check that images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed.",
            appliesTo: "Top element."
        },
        "Principle1.Guideline1_4.1_4_10_C32,C31,C33,C38,SCR34,G206.Check": {
            explanation: "Check that content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for: Vertical scrolling content at a width equivalent to 320 CSS pixels; Horizontal scrolling content at a height equivalent to 256 CSS pixels; Except for parts of the content which require two-dimensional layout for usage or meaning.",
            appliesTo: "Top element."
        },
        "Principle1.Guideline1_4.1_4_11_G195,G207,G18,G145,G174,F78.Check": {
            explanation: "Check that the visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s): User Interface Components: Visual information required to identify user interface components and states, except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author; Graphical Objects: Parts of graphics required to understand the content, except when a particular presentation of graphics is essential to the information being conveyed.",
            appliesTo: "Top element."
        },
        "Principle1.Guideline1_4.1_4_12_C36,C35.Check": {
            explanation: "Check that no loss of content or functionality occurs by setting all of the following and by changing no other style property: Line height (line spacing) to at least 1.5 times the font size; Spacing following paragraphs to at least 2 times the font size; Letter spacing (tracking) to at least 0.12 times the font size; Word spacing to at least 0.16 times the font size.",
            appliesTo: "Top element."
        },
        "Principle1.Guideline1_4.1_4_13_F95.Check": {
            explanation: "Check that where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true: Dismissable: A mechanism is available to dismiss the additional content without moving pointer hover or keyboard focus, unless the additional content communicates an input error or does not obscure or replace other content; Hoverable: If pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing; Persistent: The additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid.",
            appliesTo: "Top element."
        },
        "Principle1.Guideline2_1.2_1_4.Check": {
            explanation: "Check that if a keyboard shortcut is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true: Turn off: A mechanism is available to turn the shortcut off; Remap: A mechanism is available to remap the shortcut to use one or more non-printable keyboard characters (e.g. Ctrl, Alt, etc); Active only on focus: The keyboard shortcut for a user interface component is only active when that component has focus.",
            appliesTo: "Top element."
        },
        "Principle2.Guideline2_2.2_2_2.SCR33,SCR22,G187,G152,G186,G191": {
            explanation: "If any part of the content moves, scrolls or blinks for more than 5 seconds, or auto-updates, check that there is a mechanism available to pause, stop, or hide the content.",
            appliesTo: "Top element."
        },
        "Principle2.Guideline2_2.2_2_3.G5": {
            explanation: "Check that timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events.",
            appliesTo: "Top element."
        },
        "Principle2.Guideline2_2.2_2_4.SCR14": {
            explanation: "Check that all interruptions (including updates to content) can be postponed or suppressed by the user, except interruptions involving an emergency.",
            appliesTo: "Top element."
        },
        "Principle2.Guideline2_2.2_2_5.G105,G181": {
            explanation: "If this Web page is part of a set of Web pages with an inactivity time limit, check that an authenticated user can continue the activity without loss of data after re-authenticating.",
            appliesTo: "Top element."
        },
        "Principle1.Guideline2_2.2_2_6.Check": {
            explanation: "Check that users are warned of the duration of any user inactivity that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.",
            appliesTo: "Top element."
        },
        "Principle2.Guideline2_3.2_3_1.G19,G176": {
            explanation: "Check that no component of the content flashes more than three times in any 1-second period, or that the size of any flashing area is sufficiently small.",
            appliesTo: "Top element."
        },
        "Principle2.Guideline2_3.2_3_2.G19": {
            explanation: "Check that no component of the content flashes more than three times in any 1-second period.",
            appliesTo: "Top element."
        },
        "Principle1.Guideline2_3.2_3_3.Check": {
            explanation: "Check that motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or the information being conveyed.",
            appliesTo: "Top element."
        },
        "Principle2.Guideline2_4.2_4_1.H64.2": {
            explanation: "Check that the title attribute of this element contains text that identifies the frame.",
            appliesTo: "Top element."
        },
        "Principle2.Guideline2_4.2_4_1.G1,G123,G124,H69": {
            explanation: "Ensure that any common navigation elements can be bypassed; for instance, by use of skip links, header elements, or ARIA landmark roles.",
            appliesTo: "Top element."
        },
        "Principle2.Guideline2_4.2_4_2.H25.2": {
            explanation: "Check that the title element describes the document.",
            appliesTo: "Top element."
        },
        "Principle2.Guideline2_4.2_4_3.H4.2": {
            explanation: "If tabindex is used, check that the tab order specified by the tabindex attributes follows relationships in the content.",
            appliesTo: "Top element, when it is detected that tabindex has been used. Where tabindex has been inconsistently used, the order may not be correct."
        },
        "Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81,H33": {
            explanation: "Check that the link text combined with programmatically determined link context, or its title attribute, identifies the purpose of the link.",
            appliesTo: "Anchor (A) elements in general, where they contain a title attribute."
        },
        "Principle2.Guideline2_4.2_4_4.H77,H78,H79,H80,H81": {
            explanation: "Check that the link text combined with programmatically determined link context identifies the purpose of the link.",
            appliesTo: "Anchor (A) elements in general (no title attribute)."
        },
        "Principle2.Guideline2_4.2_4_5.G125,G64,G63,G161,G126,G185": {
            explanation: "If this Web page is not part of a linear process, check that there is more than one way of locating this Web page within a set of Web pages.",
            appliesTo: "Top element."
        },
        "Principle2.Guideline2_4.2_4_6.G130,G131": {
            explanation: "Check that headings and labels describe topic or purpose.",
            appliesTo: "Top element."
        },
        "Principle2.Guideline2_4.2_4_7.G149,G165,G195,C15,SCR31": {
            explanation: "Check that there is at least one mode of operation where the keyboard focus indicator can be visually located on user interface controls.",
            appliesTo: "Top element."
        },
        "Principle2.Guideline2_4.2_4_9.H30": {
            explanation: "Check that text of the link describes the purpose of the link.",
            appliesTo: "Anchor (A) elements in general."
        },
        "Principle1.Guideline2_5.2_5_1.Check": {
            explanation: "Check that all functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential.",
            appliesTo: "Top element."
        },
        "Principle1.Guideline2_5.2_5_2.SinglePointer_Check": {
            explanation: "Check that for functionality that can be operated using a single pointer, at least one of the following is true: No Down-Event: The down-event of the pointer is not used to execute any part of the function; Abort or Undo: Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion; Up Reversal: The up-event reverses any outcome of the preceding down-event; Essential: Completing the function on the down-event is essential.",
            appliesTo: "Top element."
        },
        "Principle1.Guideline2_5.2_5_2.Mousedown_Check": {
            explanation: "This element has an mousedown event listener. Check that for functionality that can be operated using a single pointer, at least one of the following is true: No Down-Event: The down-event of the pointer is not used to execute any part of the function; Abort or Undo: Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion; Up Reversal: The up-event reverses any outcome of the preceding down-event; Essential: Completing the function on the down-event is essential.",
            appliesTo: "All elements with an \"onmousedown\" event."
        },
        "Principle1.Guideline2_5.2_5_2.Touchstart_Check": {
            explanation: "This element has a touchstart event listener. Check that for functionality that can be operated using a single pointer, at least one of the following is true: No Down-Event: The down-event of the pointer is not used to execute any part of the function; Abort or Undo: Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion; Up Reversal: The up-event reverses any outcome of the preceding down-event; Essential: Completing the function on the down-event is essential.",
            appliesTo: "All elements with an \"ontouchstart\" event."
        },
        "Principle1.Guideline2_5.2_5_3_F96.Check": {
            explanation: "Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.",
            appliesTo: "Top element."
        },
        "Principle1.Guideline2_5.2_5_4.Check": {
            explanation: "Check that functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when: Supported Interface: The motion is used to operate functionality through an accessibility supported interface; Essential: The motion is essential for the function and doing so would invalidate the activity.",
            appliesTo: "Top element."
        },
        "Principle1.Guideline2_5.2_5_5.Check": {
            explanation: "Check that the size of the target for pointer inputs is at least 44 by 44 CSS pixels except when: Equivalent: The target is available through an equivalent link or control on the same page that is at least 44 by 44 CSS pixels; Inline: The target is in a sentence or block of text; User Agent Control: The size of the target is determined by the user agent and is not modified by the author; Essential: A particular presentation of the target is essential to the information being conveyed.",
            appliesTo: "Top element."
        },
        "Principle1.Guideline2_5.2_5_6.Check": {
            explanation: "Check that the content does not restrict use of input modalities available on a platform except where the restriction is essential, required to ensure the security of the content, or required to respect user settings.",
            appliesTo: "Top element."
        },
        "Principle3.Guideline3_1.3_1_2.H58": {
            explanation: "Ensure that any change in language is marked using the lang and/or xml:lang attribute on an element, as appropriate.",
            appliesTo: "Top element."
        },
        "Principle3.Guideline3_1.3_1_3.H40,H54,H60,G62,G70": {
            explanation: "Check that there is a mechanism available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon.",
            appliesTo: "Top element."
        },
        "Principle3.Guideline3_1.3_1_4.G102,G55,G62,H28,G97": {
            explanation: "Check that a mechanism for identifying the expanded form or meaning of abbreviations is available.",
            appliesTo: "Top element."
        },
        "Principle3.Guideline3_1.3_1_5.G86,G103,G79,G153,G160": {
            explanation: "Where the content requires reading ability more advanced than the lower secondary education level, supplemental content or an alternative version should be provided.",
            appliesTo: "Top element."
        },
        "Principle3.Guideline3_2.3_2_1.G107": {
            explanation: "Check that a change of context does not occur when any input field receives focus.",
            appliesTo: "Top element."
        },
        "Principle3.Guideline3_2.3_2_3.G61": {
            explanation: "Check that navigational mechanisms that are repeated on multiple Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.",
            appliesTo: "Top element."
        },
        "Principle3.Guideline3_2.3_2_4.G197": {
            explanation: "Check that components that have the same functionality within this Web page are identified consistently in the set of Web pages to which it belongs.",
            appliesTo: "Top element."
        },
        "Principle3.Guideline3_3.3_3_1.G83,G84,G85": {
            explanation: "If an input error is automatically detected in this form, check that the item(s) in error are identified and the error(s) are described to the user in text.",
            appliesTo: "Form elements in general."
        },
        "Principle3.Guideline3_3.3_3_2.G131,G89,G184,H90": {
            explanation: "Labels or instructions are provided when content requires user input.",
            appliesTo: "Form elements in general."
        },
        "Principle3.Guideline3_3.3_3_3.G177": {
            explanation: "If an input error is automatically detected and suggestions for correction are known, then the suggestions are provided to the user, unless it would jeopardize the security or purpose of the content.",
            appliesTo: "Form elements in general."
        },
        "Principle3.Guideline3_3.3_3_4.G98,G99,G155,G164,G168.LegalForms": {
            explanation: "For Web pages that cause legal commitments or financial transactions for the user to occur, that modify or delete user-controllable data in data storage systems, or that submit user test responses, at least one of the following is true: Reversible: Submissions are reversible. Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them. Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.",
            appliesTo: "Form elements in general."
        },
        "Principle3.Guideline3_3.3_3_5.G71,G184,G193": {
            explanation: "Context-sensitive help is available.",
            appliesTo: "Form elements in general."
        },
        "Principle3.Guideline3_3.3_3_6.G98,G99,G155,G164,G168.AllForms": {
            explanation: "For Web pages that require the user to submit information, at least one of the following is true: Reversible: Submissions are reversible. Checked: Data entered by the user is checked for input errors and the user is provided an opportunity to correct them. Confirmed: A mechanism is available for reviewing, confirming, and correcting information before finalizing the submission.",
            appliesTo: "Form elements in general."
        },
        "Principle1.Guideline4_1.4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check": {
            explanation: "Check that status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus.",
            appliesTo: "Top element."
        }
    },
};

export default messages;