interface ProgressBarProps {
  progress: number
}

export function ProgressBar(props: ProgressBarProps) {
  return (
    <div className='h-3 rounded-xl bg-zinc-700 w-full mt-4'>
      <div 
        role="progressbar"
        aria-label="Progresso de hábitos completados nesse dia"
        aria-valuenow={props.progress}
<<<<<<< HEAD
        className="h-3 rounded-xl bg-violet-600 transition-all"
=======
        className="h-3 rounded-xl bg-violet-600"
>>>>>>> 1184bab9a09838ceccfb01bac0a367e7ecacb2a0
        style={{
          width: `${props.progress}%`
        }}
      />
    </div>
  )
}