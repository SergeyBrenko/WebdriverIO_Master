const {ZebrunnerReporter, ZebrunnerService} = require('javascript-agent-wdio');

exports.config={
    runner:'local',    
    specs: [
        './test/feature-file/**/*.feature'
    ],
    capabilities: [{
        browserName: 'chrome',        
    }],    
    framework: 'cucumber', 
    cucumberOpts: {        
        require: ['./test/step-definition/*.ts'],
    },
    reporters: [
        [
            ZebrunnerReporter, 
            {}
        ]
    ],
    services: [
        [
            ZebrunnerService
        ]
    ],
    autoCompileOpts: {
        autoCompile: true, 
        tsNodeOpts: {
            transpileOnly: true,
            project: 'tsconfig.json'            
        }
    }
}
