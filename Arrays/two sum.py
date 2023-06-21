class Solution(object):
    def twoSum(self, nums, target):
       
        itr=0
        for i in range(len(nums)):
            for j in range(itr+1, len(nums)):
                
                if nums[i]+ nums[j] ==target:
                     
                     return (i,j)
            itr+=1