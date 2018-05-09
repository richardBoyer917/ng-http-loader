/*
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpinnerComponent } from '../../../src/components/spinner/spinner.component';
import { By } from '@angular/platform-browser';
import { SPINKIT_COMPONENTS } from '../../../src/spinkits';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgHttpLoaderServicesModule } from '../../../src/services/ng-http-loader-services.module';
import { SkThreeBounceComponent } from '../../../src/components/sk-three-bounce/sk-three-bounce.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('SpinnerNgOutletComponent', () => {
    let component: SpinnerComponent;
    let fixture: ComponentFixture<SpinnerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SpinnerComponent, SPINKIT_COMPONENTS],
            imports: [NgHttpLoaderServicesModule, HttpClientTestingModule]
        })
            .overrideModule(BrowserDynamicTestingModule, {
                set: {
                    entryComponents: [SkThreeBounceComponent]
                }
            })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SpinnerComponent);
        component = fixture.componentInstance;
    });

    it('should be possible to specify an entryComponent', () => {
        component.isSpinnerVisible = true;
        component.entryComponent = SkThreeBounceComponent;
        fixture.detectChanges();

        const element = fixture
            .debugElement
            .query(By.css('.sk-bounce1'))
            .nativeElement;

        expect(element.className).toBe('sk-child sk-bounce1');
    });

    it('should force [spinner] to null if entryComponent is defined', () => {
        component.isSpinnerVisible = true;
        component.spinner = 'whatever';
        component.entryComponent = SkThreeBounceComponent;
        fixture.detectChanges();

        expect(component.spinner).toBeNull();
    });
});
