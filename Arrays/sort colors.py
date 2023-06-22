class Solution(object):
    def sortColors(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        leftPointer = 0
        rightPointer = len(nums)-1
        iterator = 0
        while(iterator<=rightPointer):
            if nums[iterator] ==0:
                nums[iterator], nums[leftPointer] = nums[leftPointer], nums[iterator]
                leftPointer+=1
                iterator+=1
                
            elif nums[iterator] ==2: 
                nums[iterator], nums[rightPointer] = nums[rightPointer], nums[iterator]
                rightPointer-=1

            else:
                iterator+=1
                
