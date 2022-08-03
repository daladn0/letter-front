"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[960],{8123:function(e,a,o){o.d(a,{AA:function(){return r},VI:function(){return i},k:function(){return n},th:function(){return s}});var t=o(9501);const r=[{label:"Your email",name:"email",as:"input",placeholder:"example@gmail.com",type:"email",model:""},{label:"Your password",name:"password",as:"input",placeholder:"********",type:"password",model:""}],n=(0,t.Ry)({email:(0,t.Z_)().required("Email is required").email("Invalid email"),password:(0,t.Z_)().required("Password is required").min(6,"Password should have at least 6 chars").max(54,"Password should not be longer than 54 chars")}),s=[{label:"Your email",name:"email",as:"input",placeholder:"example@gmail.com",type:"email",model:""},{label:"Your password",name:"password",as:"input",placeholder:"********",type:"password",model:""},{label:"Confirm password",name:"confirmPassword",as:"input",placeholder:"********",type:"password",model:""}],i=(0,t.Ry)({email:(0,t.Z_)().required("Email is required").email("Invalid email"),password:(0,t.Z_)().required("Password is required").min(6,"Password should have at least 6 chars").max(54,"Password should not be longer than 54 chars"),confirmPassword:(0,t.Z_)().required("Confirm your password").oneOf([(0,t.iH)("password"),null],"Passwords must match")})},3422:function(e,a,o){o.d(a,{Z:function(){return b}});var t=o(6252),r=o(3577),n=o(9963);const s={class:"text-xl font-medium text-gray-900 text-center"},i={class:"text-sm font-medium text-gray-900 block mb-2"},l=["onInput","onUpdate:modelValue","type","name","placeholder"],m={key:0,class:"text-sm text-red-500 mt-2 block"},d=["disabled"],u={key:0},c={key:0,class:"block text-center text-red-500 font-semibold text-sm"},h={key:1,class:"text-sm font-medium text-gray-500 text-center"};var f=o(2954),p=o(3304);(0,f.jQ)({validateOnModelUpdate:!1,validateOnBlur:!1});var g={name:"AuthForm",emits:["submit"],props:{formSchema:{type:Object,required:!0},validationSchema:{type:Object},isLoading:{type:Boolean},errorMessage:{type:String}},components:{Field:f.gN,Form:f.l0,LoadingSpinner:p.Z},data:()=>({email:"",password:""}),methods:{onSubmit(){const e={};this.formSchema.fields.forEach((a=>{e[a.name]=a.model})),this.$emit("submit",e)},onInvalidSubmit(e){let{errors:a}=e;const o=Array.from(Object.keys(a));if(!o)return;const t=this.$refs[o[0]][0];t&&t.focus()}},mounted(){const e=Object.keys(this.$refs);e.length&&this.$refs[e[0]][0].focus()}},b=(0,o(3744).Z)(g,[["render",function(e,a,o,f,p,g){const b=(0,t.up)("Field"),w=(0,t.up)("LoadingSpinner"),y=(0,t.up)("router-link"),S=(0,t.up)("Form");return(0,t.wg)(),(0,t.j4)(S,{onSubmit:g.onSubmit,onInvalidSubmit:g.onInvalidSubmit,"validation-schema":o.validationSchema,class:"space-y-6 bg-white p-8 rounded-md w-full max-w-md"},{default:(0,t.w5)((()=>[(0,t._)("h3",s,(0,r.zw)(o.formSchema.meta.title),1),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(o.formSchema.fields,(e=>((0,t.wg)(),(0,t.j4)(b,{name:e.name,key:e.name},{default:(0,t.w5)((a=>{let{field:o,errorMessage:s,meta:d,handleChange:u}=a;return[(0,t._)("label",i,[(0,t.Uk)((0,r.zw)(e.label)+" ",1),(0,t.wy)((0,t._)("input",(0,t.dG)({onInput:e=>u(e,d.touched),"onUpdate:modelValue":a=>e.model=a},o,{type:e.type,name:e.name,ref_for:!0,ref:e.name,class:["h-12 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mt-2",{"border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500":s}],placeholder:e.placeholder}),null,16,l),[[n.YZ,e.model]]),s?((0,t.wg)(),(0,t.iD)("span",m,(0,r.zw)(s),1)):(0,t.kq)("v-if",!0)])]})),_:2},1032,["name"])))),128)),(0,t._)("button",{disabled:o.isLoading,type:"submit",class:"w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all h-12 disabled:opacity-80 disabled:hover:bg-blue-700"},[o.isLoading?((0,t.wg)(),(0,t.j4)(w,{key:1,class:"mx-auto w-6 h-6"})):((0,t.wg)(),(0,t.iD)("span",u,(0,r.zw)(o.formSchema.meta.submitLabel),1))],8,d),o.errorMessage?((0,t.wg)(),(0,t.iD)("span",c,(0,r.zw)(o.errorMessage),1)):(0,t.kq)("v-if",!0),o.formSchema.meta.footer?((0,t.wg)(),(0,t.iD)("div",h,[(0,t.Uk)((0,r.zw)(o.formSchema.meta.footer.label)+" ",1),(0,t.Wm)(y,{to:o.formSchema.meta.footer.linkHref,class:"text-blue-700 hover:underline"},{default:(0,t.w5)((()=>[(0,t.Uk)((0,r.zw)(o.formSchema.meta.footer.linkText),1)])),_:1},8,["to"])])):(0,t.kq)("v-if",!0)])),_:1},8,["onSubmit","onInvalidSubmit","validation-schema"])}]])},8960:function(e,a,o){o.r(a),o.d(a,{default:function(){return u}});var t=o(6252);const r={class:"w-full"};var n=o(989),s=o(3422),i=o(8123),l=o(7984),m=o(2979),d={name:"LoginPage",components:{DynamicForm:s.Z},data:()=>({isLoading:!1,error:null,formSchema:{meta:{title:"Log in",submitLabel:"Login to your account",footer:{label:"Not registered?",linkText:"Create account",linkHref:"/signup"}},fields:i.AA},validationSchema:i.k}),methods:{authLogin:l.login,...(0,n.nv)("auth",{authLogin:"login"}),async onSubmit(e){this.error=null,this.isLoading=!0;const{response:a,error:o,errorMessage:t}=await(0,m.j)(l.login,e.email,e.password);a&&(this.authLogin(a.data.user),localStorage.setItem("token",a.data.accessToken),this.$router.push({name:"home"})),o&&(console.log(o,t),this.error=t||"Something went wrong"),this.isLoading=!1}}},u=(0,o(3744).Z)(d,[["render",function(e,a,o,n,s,i){const l=(0,t.up)("DynamicForm");return(0,t.wg)(),(0,t.iD)("div",r,[(0,t.Wm)(l,{class:"mx-auto",formSchema:s.formSchema,validationSchema:s.validationSchema,"is-loading":s.isLoading,errorMessage:s.error,onSubmit:i.onSubmit},null,8,["formSchema","validationSchema","is-loading","errorMessage","onSubmit"])])}]])}}]);