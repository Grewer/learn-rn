//
//  nativeModule.m
//  learn
//
//  Created by apple on 2020/6/19.
//  Copyright © 2020 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "nativeModule.h"


@interface nativeModule ()

@property (nonatomic) RCTPromiseResolveBlock normalResolve;
@property (nonatomic) RCTPromiseRejectBlock normalReject;
@property (nonatomic) NSInteger num;

@end

@implementation nativeModule
{
  bool hasListeners;
}

RCT_EXPORT_MODULE();

// 接收字符串
RCT_EXPORT_METHOD(addHelloWord:(NSString *)name location:(NSString *)location)
{
  NSLog(@"%@,%@", name, location);
  //  RCTLogInfo(@"带参数---->name=%@,location=%@",name,location);
}

// // 只接受一个参数——传递给 JavaScript 回调函数的参数数组。
RCT_EXPORT_METHOD(checkIsRoot:(RCTResponseSenderBlock)callback) {
  NSArray *array = @[@"string", @"number"];
  callback(array);
}


// 这是一个计时器
-(void)startTime: (NSArray*) data{
  NSTimer *timer = [NSTimer scheduledTimerWithTimeInterval:2 repeats:YES block:^(NSTimer * _Nonnull timer) {
    
    NSArray *events =@[@"Promise ",@"test ",@" array"];
    if (events) {
      self.normalResolve(events);
      [timer invalidate];
    } else {
      [timer invalidate];
      NSError *error=[NSError errorWithDomain:@"我是回调错误信息..." code:101 userInfo:nil];
      self.normalReject(@"no_events", @"There were no events", error);
    }
  }];
  
  [[NSRunLoop mainRunLoop] addTimer:timer forMode:NSDefaultRunLoopMode];
}

// 回调给RN的参数，回调的错误信息
RCT_EXPORT_METHOD(getHBDeviceUniqueID: (RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
  
  // 要执行的任务
  self.normalResolve = resolve;
  self.normalReject = reject;
  
  [self performSelectorOnMainThread:@selector(startTime:) withObject: [NSArray arrayWithObjects: @"1", @"2", nil] waitUntilDone:YES];
}


// 这是一个计时器2
-(void)startTime2: (NSArray*) data{
  NSLog(@"data%@",data);
  
  NSTimer *timer = [NSTimer scheduledTimerWithTimeInterval:1 repeats:YES block:^(NSTimer * _Nonnull timer) {
    
    NSLog(@"%d", (int)self.num);
    
    self.num = self.num + 1;
    
    NSLog(@"%d", (int)self.num);
    
    if (self.num > 4) {
      [timer invalidate];
      NSLog(@"end");
      self.normalResolve(data);
    }
    
  }];
  
  [[NSRunLoop mainRunLoop] addTimer:timer forMode:NSDefaultRunLoopMode];
}

// RCT_REMAP_METHOD 与RCT_EXPORT_METHOD相同，但是该方法是在JS线程上从JS同步调用的，可能会返回结果。
// 同步可能会有性能问题  建议除了 promise 以外都别使用
RCT_REMAP_METHOD(findEvents,
                 findEventsWithResolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject)
{
  self.normalResolve = resolve;
  self.normalReject = reject;
  
  
  self.num = 0;
  
  [self performSelectorOnMainThread:@selector(startTime2:) withObject: [NSArray arrayWithObjects: @"1", @"2", nil] waitUntilDone:YES];
}



-(void)startObserving {
  hasListeners = YES;
}

-(void)stopObserving {
  hasListeners = NO;
}


- (NSArray<NSString *> *)supportedEvents
{
  return @[@"EventReminder"];
}

- (void)calendarEventReminderReceived:(NSNotification *)notification
{
  // 这是官网的例子
  NSLog(@"calendarEventReminderReceived");
  NSString *eventName = notification.userInfo[@"name"];
  [self sendEventWithName:@"EventReminder" body:@{@"name": eventName}];
}

RCT_EXPORT_METHOD(postNotificationEvent:(NSString *)name)
{
  NSLog(@"calendarEventReminderReceived");
  if (hasListeners) { // Only send events if anyone is listening
    [self sendEventWithName:@"EventReminder" body:@{@"name": name}];;
  }
}

RCT_EXPORT_METHOD(Send){
  NSLog(@"run");
  NSDictionary *dict = @{@"name" : @"veuimyzi"};
  
  NSNotification *notification = [[NSNotification alloc] initWithName:@"EventReminder" object:nil userInfo:dict] ;
  
  [self calendarEventReminderReceived:notification];
}

//RCT_EXPORT_METHOD(dispatchTest){
//   dispatch_sync(dispatch_get_main_queue(), ^{
//      NSLog(@"主线程执行同步任务到主队列, 挂起当前任务，主线程死锁");
//      NSLog(@"current thread is %@", [NSThread currentThread]);
//  });
//
//}


@end
