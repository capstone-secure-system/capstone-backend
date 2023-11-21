class FallenRequestDto:
    def __init__(self):
      self.label = 'Fall-Detected'
      self.detectedNum = 0
      self.confidences = []

    def add_detection(self,confidence):
      self.detectedNum += 1
      self.confidences.append(confidence)
    
    def to_dict(self):
      return {
        'detectedNum': self.detectedNum,
        'label': self.label,
        'confidences': self.confidences
      }

    def is_detected(self):
      return self.detectedNum > 0