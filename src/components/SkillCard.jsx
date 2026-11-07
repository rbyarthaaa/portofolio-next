export default function SkillCard ({ nama, level }) {
return (
<article className="rounded-xl border-slate-200 bg-white p-5 shadow-sm transition-y-1 hover:shadow-md">
  <h3 className="text-lg font-semibold text-utama dark:text-sky-200">{nama}</h3>
  <p className="mt-1 text-sm text-gray-600">Level: {level}</p>
</article> 
 );
}