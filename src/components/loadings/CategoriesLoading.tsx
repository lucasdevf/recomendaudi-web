import { SkeletonCategory } from '../skeletons/SkeletonCategory'

export function CategoriesLoading() {
  return (
    <div className="grid grid-cols-5 gap-10 mt-5">
      <SkeletonCategory />
      <SkeletonCategory />
      <SkeletonCategory />
      <SkeletonCategory />
      <SkeletonCategory />
    </div>
  )
}
