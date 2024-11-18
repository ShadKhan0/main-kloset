import clsx from 'clsx';

export default function LogoIcon(props: React.ComponentProps<'svg'>) {
  return (
    <svg
 
      xmlns="http://www.w3.org/2000/svg"
      aria-label={`${process.env.SITE_NAME} logo`}
      viewBox="0 0 40.000000 20.000000"
      
      {...props}
      className={clsx('h-4 w-4 fill-black dark:fill-white', props.className)}
    >
     <g transform="translate(0.000000,20.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M164 119 c-16 -17 -59 -46 -96 -65 -38 -19 -68 -39 -68 -44 0 -13 17
-5 108 46 42 24 82 44 90 44 11 0 110 -49 176 -87 11 -7 22 -10 24 -8 10 9
-14 28 -77 59 -37 19 -73 42 -81 51 -29 35 -46 36 -76 4z"/>
<path d="M122 13 c27 -2 69 -2 96 0 26 2 4 3 -48 3 -52 0 -74 -1 -48 -3z"/>
<path d="M308 13 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/>
</g>
    </svg>
  );
}
