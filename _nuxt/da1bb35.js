(window.webpackJsonp=window.webpackJsonp||[]).push([[8,4,6],{260:function(e,t,r){var content=r(265);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(77).default)("3feb435a",content,!0,{sourceMap:!1})},261:function(e,t,r){var content=r(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(77).default)("7fa42452",content,!0,{sourceMap:!1})},262:function(e,t,r){var content=r(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(77).default)("70ceb58d",content,!0,{sourceMap:!1})},264:function(e,t,r){"use strict";r(260)},265:function(e,t,r){var n=r(76)(!1);n.push([e.i,".input-group[data-v-39c791ec]{position:relative;display:flex;flex-direction:column;margin-bottom:4rem}.input-group label[data-v-39c791ec]{width:100%}.input-group .label[data-v-39c791ec]{display:block;margin-bottom:1rem;font-size:2rem;line-height:1.3}@media(max-width:767.98px){.input-group .label[data-v-39c791ec]{font-size:1.4rem}}.input-group .form-control[data-v-39c791ec]{padding:1rem 1.8rem;font-size:1.6rem;color:#000;border:.1rem solid rgba(0,0,0,.2);border-radius:.2rem}.input-group .form-control[data-v-39c791ec]::-moz-placeholder{color:rgba(0,0,0,.5)}.input-group .form-control[data-v-39c791ec]:-ms-input-placeholder{color:rgba(0,0,0,.5)}.input-group .form-control[data-v-39c791ec]::placeholder{color:rgba(0,0,0,.5)}@media(max-width:767.98px){.input-group .form-control[data-v-39c791ec]{font-size:1.4rem}}.input-group .form-control[data-v-39c791ec]:focus{box-shadow:none}.input-group .textarea-holder[data-v-39c791ec]{position:relative}.input-group .textarea-holder .maxlength[data-v-39c791ec]{position:absolute;right:1.2rem;bottom:1.5rem;font-size:1rem;color:rgba(0,0,0,.5)}.input-group textarea[data-v-39c791ec]{min-height:11.5rem;resize:none}.input-group .error-message[data-v-39c791ec]{position:absolute;font-size:1.6rem;color:red}@media(max-width:767.98px){.input-group .error-message[data-v-39c791ec]{font-size:1.5rem}}",""]),e.exports=n},266:function(e,t,r){"use strict";r(261)},267:function(e,t,r){var n=r(76)(!1);n.push([e.i,".phone-input[data-v-40478ce0]{margin-bottom:4rem}.phone-input label[data-v-40478ce0]{width:100%}.phone-input .label[data-v-40478ce0]{display:block;width:100%;margin-bottom:1rem;font-size:2rem;line-height:1.3}@media(max-width:767.98px){.phone-input .label[data-v-40478ce0]{font-size:1.4rem}}@media(max-width:767.98px){.phone-input[data-v-40478ce0]{margin-bottom:4rem}}",""]),e.exports=n},268:function(e,t,r){"use strict";r(262)},269:function(e,t,r){var n=r(76)(!1);n.push([e.i,".phone-input{position:relative}.phone-input .vue-phone-number-input .select-country-container{max-width:100%;width:100%}.phone-input .country-selector{min-height:4.2rem;height:4.2rem}.phone-input .country-selector input{border-color:rgba(0,0,0,.2)!important}.phone-input .country-selector__toggle{pointer-events:none}.phone-input .country-selector__input,.phone-input .input-tel,.phone-input .input-tel__input{min-height:4.2rem;height:4.2rem}.phone-input .input-tel input{border-color:rgba(0,0,0,.2)!important}.phone-input .error-message{position:absolute;font-size:1.6rem;color:red}@media(max-width:767.98px){.phone-input .error-message{font-size:1.5rem}}",""]),e.exports=n},271:function(e,t,r){"use strict";r.r(t);var n=r(263),o=(r(270),["input"]),l={name:"Input",props:{inputType:{type:String,default:"input"},type:{type:String,default:"text"},value:{type:String,default:""},label:{type:String,default:""},placeholder:{type:String,default:""},errorMessage:{type:String,default:"Required field"},errorShowing:{type:Boolean,default:!1},maxlength:{type:Number,default:500}},computed:{listeners:function(){var e=this.$listeners;e.input;return Object(n.a)(e,o)},maxLength:function(){return this.maxlength-this.value.length}},methods:{onInput:function(e){this.$emit("input",e.target.value)},onChange:function(e){this.$emit("change",e.target.value)}}},c=(r(264),r(23)),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"input-group"},["input"===e.inputType?r("label",[e.label?r("span",{staticClass:"label"},[e._v(e._s(e.label))]):e._e(),e._v(" "),r("input",e._g({staticClass:"form-control",attrs:{type:e.type,placeholder:e.placeholder},domProps:{value:e.value},on:{input:e.onInput}},e.listeners)),e._v(" "),e._t("error",(function(){return[e.errorShowing?r("span",{staticClass:"error-message"},[r("span",[e._v(e._s(e.errorMessage))])]):e._e()]}))],2):e._e(),e._v(" "),"textarea"===e.inputType?r("label",[e.label?r("span",{staticClass:"label"},[e._v(e._s(e.label))]):e._e(),e._v(" "),r("div",{staticClass:"textarea-holder"},[r("textarea",e._g({ref:"textarea",staticClass:"form-control",attrs:{maxlength:e.maxlength,placeholder:e.placeholder},domProps:{value:e.value},on:{input:e.onInput}},e.listeners)),e._v(" "),r("span",{staticClass:"maxlength"},[e._v("\n\t\t\t\t"+e._s(e.maxLength)+"\n\t\t\t")])]),e._v(" "),e._t("error",(function(){return[e.errorShowing?r("span",{staticClass:"error-message"},[r("span",[e._v(e._s(e.errorMessage))])]):e._e()]}))],2):e._e()])}),[],!1,null,"39c791ec",null);t.default=component.exports},272:function(e,t,r){"use strict";r.r(t);var n=r(263),o=r(276),l=r.n(o),c=(r(277),["input"]),m={name:"PhoneInput",components:{VuePhoneNumberInput:l.a},model:{event:"input",prop:"value"},props:{label:{type:String,default:""},value:{type:[Object,String],default:function(){return{}}},errorMessage:{type:String,default:"Required field"},errorShowing:{type:Boolean,default:!1}},data:function(){return{results:{}}},computed:{listeners:function(){var e=this.$listeners;e.input;return Object(n.a)(e,c)}},methods:{onInput:function(e){this.$emit("input",e)}}},f=(r(266),r(268),r(23)),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"phone-input"},[r("label",[e.label?r("span",{staticClass:"label"},[e._v(e._s(e.label))]):e._e(),e._v(" "),r("VuePhoneNumberInput",e._g({attrs:{value:e.value,"border-radius":2,maxlength:"17"},on:{input:e.onInput,update:function(t){e.results=t}}},e.listeners)),e._v(" "),e._t("error",(function(){return[e.errorShowing?r("span",{staticClass:"error-message"},[r("span",[e._v(e._s(e.errorMessage))])]):e._e()]}))],2)])}),[],!1,null,"40478ce0",null);t.default=component.exports},278:function(e,t,r){"use strict";r.r(t);r(24),r(62),r(33);var n=r(279),o=r(281),l=r(271),c=r(272),m={name:"ContactForm",components:{Input:l.default,PhoneInput:c.default},mixins:[n.validationMixin],data:function(){return{form:{name:"",email:"",message:"",phone:"",phoneIsValid:{}}}},validations:function(){return{form:{name:{required:o.required},email:{required:o.required,email:o.email},message:{required:o.required},phone:{required:o.required},phoneIsValid:{sameAs:Object(o.sameAs)((function(){return!0}))}}}},methods:{onPhoneInput:function(){console.log(this.$refs.telInput.results),this.form.phoneIsValid=this.$refs.telInput.results.isValid},formatInput:function(e){if("name"===e){var t=this.form[e].replace(/[&/\\#,+()$~%@!'":*?+=<>{}0-9]/g,"");this.form[e]=t.substring(0,50)}else if("email"===e){var r=this.form[e].replace(/[&/\\#,+()$~%^'":*?<>{ }]/g,"");this.form[e]=r.substring(0,100)}},submitForm:function(){if(this.$v.form.$touch(),this.$v.form.$invalid)return console.log("some erorr");console.log("all good"),this.$v.$reset(),this.form.name="",this.form.email="",this.form.message="",this.form.phone=""}}},f=r(23),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"contact-form"},[r("form",{on:{submit:function(e){e.preventDefault()}}},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-md-6"},[r("Input",{attrs:{"error-showing":e.$v.form.name.$error,placeholder:"Name"},on:{input:function(t){return e.formatInput("name")}},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),r("PhoneInput",{ref:"telInput",attrs:{"error-showing":e.$v.form.phone.$error},on:{update:e.onPhoneInput},scopedSlots:e._u([{key:"error",fn:function(){return[e.$v.form.phoneIsValid.$dirty&&e.$v.form.phoneIsValid.$invalid&&!e.$v.form.phone.$error?r("span",{staticClass:"error-message"},[e.$v.form.phoneIsValid.$error?r("span",[e._v("Incorrect number")]):e._e()]):e._e(),e._v(" "),e.$v.form.phone.$dirty&&e.$v.form.phone.$invalid?r("span",{staticClass:"error-message"},[e.$v.form.phone.$error?r("span",[e._v("Requred filed")]):e._e()]):e._e()]},proxy:!0}]),model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}}),e._v("\n\t\t\t\t"+e._s(e.form.phone)+"\n\t\t\t\t"),r("Input",{attrs:{"error-showing":e.$v.form.email.$error,placeholder:"Email"},on:{input:function(t){return e.formatInput("email")}},scopedSlots:e._u([{key:"error",fn:function(){return[e.$v.form.email.$dirty&&e.$v.form.email.$invalid?r("span",{staticClass:"error-message"},[e.$v.form.email.email?e._e():r("span",[e._v("Incorrect email")]),e._v(" "),e.$v.form.email.required?e._e():r("span",[e._v("Requred filed")])]):e._e()]},proxy:!0}]),model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),r("Input",{attrs:{placeholder:"Write us about your project in general...","input-type":"textarea","error-showing":e.$v.form.message.$error},model:{value:e.form.message,callback:function(t){e.$set(e.form,"message",t)},expression:"form.message"}}),e._v(" "),r("button",{staticClass:"btn btn-primary",on:{click:e.submitForm}},[e._v("submit")])],1)])])])}),[],!1,null,null,null);t.default=component.exports},310:function(e,t,r){"use strict";r.r(t);var n={name:"Contact",components:{ContactForm:r(278).default}},o=r(23),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"contact-page"},[t("div",{staticClass:"container"},[t("ContactForm")],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ContactForm:r(278).default})}}]);